/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionType from '../store/actions';
import ProjectModal from './ProjectModal';
import FinDataSection from '../finData/FinDataSection';
import curMonthNames from './months';
import Report_Charts from '../chartsJs/Report_Charts/Report_Charts';

function ProjectPage({ id }) {
  const project = useSelector((state) => state.projects.curProject);
  const revenueData = useSelector((state) => state.finData.revenueData);
  const costData = useSelector((state) => state.finData.costData);
  const investmentData = useSelector((state) => state.finData.investmentData);
  const financingData = useSelector((state) => state.finData.financingData);

  const dispatch = useDispatch();

  const revenueSchedule = new Array(12).fill(0);
  for (let i = 0; i < revenueSchedule.length; i++) {
    for (let j = 0; j < revenueData.length; j++) {
      revenueSchedule[i] += revenueData[j][i + 1];
    }
  }

  const costSchedule = new Array(12).fill(0);
  for (let i = 0; i < costSchedule.length; i++) {
    for (let j = 0; j < costData.length; j++) {
      costSchedule[i] += costData[j][i + 1];
    }
  }

  const investmentSchedule = new Array(12).fill(0);
  for (let i = 0; i < investmentSchedule.length; i++) {
    for (let j = 0; j < investmentData.length; j++) {
      investmentSchedule[i] += investmentData[j][i + 1];
    }
  }

  const financingSchedule = new Array(12).fill(0);
  for (let i = 0; i < financingSchedule.length; i++) {
    for (let j = 0; j < financingData.length; j++) {
      financingSchedule[i] += financingData[j][i + 1];
    }
  }

  const cfSchedule = new Array(12).fill(0);
  for (let i = 0; i < cfSchedule.length; i++) {
    cfSchedule[i] = revenueSchedule[i] - costSchedule[i] - investmentSchedule[i] + financingSchedule[i];
  }

  const cfCumulativeSchedule = new Array(12).fill(0);
  // eslint-disable-next-line prefer-destructuring
  cfCumulativeSchedule[0] = cfSchedule[0];
  for (let i = 1; i < cfCumulativeSchedule.length; i++) {
    cfCumulativeSchedule[i] = cfCumulativeSchedule[i - 1] + cfSchedule[i];
  }

  const cfAverage = Math.round((cfSchedule[9] + cfSchedule[10] + cfSchedule[11]) / 3);

  let cashDeficit = null;
  cfCumulativeSchedule.forEach((cf) => {
    if (cf < 0 && cf < cashDeficit) cashDeficit = cf;
  });

  // data for charts
  const barChartData = [];
  for (let i = 0; i < 12; i++) {
    barChartData.push({
      month: curMonthNames[i],
      sum: cfSchedule[i],
      cumulativeSum: cfCumulativeSchedule[i],
    });
  }

  const revenueChartData = [];
  for (let i = 0; i < revenueData.length; i++) {
    if (revenueData[i][12] !== 0) {
      revenueChartData.push({
        title: revenueData[i].title,
        sum: revenueData[i][12],
      });
    }
  }

  const costChartData = [];
  for (let i = 0; i < costData.length; i++) {
    if (costData[i][12] !== 0) {
      costChartData.push({
        title: costData[i].title,
        sum: costData[i][12],
      });
    }
  }

  const chartData = {
    barChartData,
    revenueChartData,
    costChartData,
  };
  console.log(chartData);

  const memoLoadProjectData = useCallback(
    async () => {
      const response = await fetch(`/api/project/${id}`);
      const projectData = await response.json();
      projectData.industry = projectData.industry.toLowerCase();
      dispatch({ type: actionType.LOAD_PROJECT, payload: projectData });
    },
    [dispatch, id],
  );

  const memoLoadFindData = useCallback(
    async () => {
      const response = await fetch(`/api/project/${id}/findata`);
      const projectFinData = await response.json();
      dispatch({ type: actionType.LOAD_FIN_DATA, payload: projectFinData });
    },
    [dispatch, id],
  );

  useEffect(() => {
    memoLoadProjectData();
    memoLoadFindData();
  }, [id, memoLoadFindData, memoLoadProjectData]);

  return (
    <div className="project-container">
      <h4>
        {project.title}
        {' '}
        <button type="button" className="btn btn-outline-dark btn-add" data-bs-toggle="modal" data-bs-target="#projectModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16" style={{ marginLeft: '5px', marginBottom: '5px' }}>
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </button>
      </h4>
      <div className="col-sm-6 project-desc">
        <p>{project.description}</p>
      </div>
      <div className="project-resume">
        <div className={cashDeficit ? 'card text-bg-warning mb-3' : 'card text-bg-success mb-3'} style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <h5>Резюме</h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              Индустрия:
              {' '}
              <b>{project.industry}</b>
            </p>
            <p className="card-text">
              Среднемесячный CF в последний квартал прогноза:
              {' '}
              <b>
                {cfAverage.toLocaleString()}
                {' '}
                руб
              </b>
            </p>
            <p className="card-text">
              Потребность в дополнительном финансировании:
              {cashDeficit
                ? (
                  <b>
                    {' '}
                    {Math.abs(cashDeficit).toLocaleString()}
                    {' '}
                    руб
                  </b>
                ) : <b> отсутствует</b>}
              {' '}
            </p>
          </div>
        </div>
        <div className="card text-bg-warning mb-3 card-info" style={{ maxWidth: '18rem' }}>
          <div className="card-body">
            <ul>
              <li><p className="card-text">CF (Cash Flow) - денежный поток</p></li>
              <li><p className="card-text">Прогнозный период - 12 месяцев, включая текущий</p></li>
              <li><p className="card-text">Результаты расчитаны на основе данных, предоставленных пользователем</p></li>
            </ul>
          </div>
        </div>
      </div>
      <Report_Charts chartData={chartData} />
      <div className="fin-data-group">
        <FinDataSection />
        <ProjectModal />
      </div>
      <table className="table results-table">
        <thead>
          <tr>
            <th className="row-name">Сумма, тыс. руб</th>
            {curMonthNames.map((month, index) => <th key={index}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="row-name">Поступления от продаж</td>
            {revenueSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000).toLocaleString() : '-'}</td>)}
          </tr>
          <tr>
            <td className="row-name">Оплата товаров и услуг</td>
            {costSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000).toLocaleString() : '-'}</td>)}
          </tr>
          <tr>
            <td className="row-name">Инвестиции</td>
            {investmentSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000).toLocaleString() : '-'}</td>)}
          </tr>
          <tr>
            <td className="row-name">Финансирование</td>
            {financingSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000).toLocaleString() : '-'}</td>)}
          </tr>
          <tr style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <td className="row-name">Денежный поток</td>
            {cfSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000).toLocaleString() : '-'}</td>)}
          </tr>
          <tr style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <td className="row-name">Денежный поток, накопленный</td>
            {cfCumulativeSchedule.map((data, index) => <td key={`1-${index}`} className={data < 0 ? 'negative' : 'positive'}>{data ? Math.round(data / 1000).toLocaleString() : '-'}</td>)}
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-dark">Скачать отчет о проекте</button>
    </div>
  );
}

export default ProjectPage;
