/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionType from '../store/actions';
import ProjectModal from './ProjectModal';
import FinDataSection from '../finData/FinDataSection';
import curMonthNames from './months';

function ProjectPage({ id }) {
  const project = useSelector((state) => state.projects.curProject);
  const revenueData = useSelector((state) => state.finData.revenueData);
  const costData = useSelector((state) => state.finData.costData);
  const investmentData = useSelector((state) => state.finData.investmentData);
  const financingData = useSelector((state) => state.finData.financingData);

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

  const dispatch = useDispatch();

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
        <div className="card text-bg-warning mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <h5>Резюме</h5>
            <p style={{ margin: '0' }}>(руб)</p>
          </div>
          <div className="card-body">
            <p className="card-text">
              <b>Индустрия</b>
              :
              {' '}
              {project.industry}
            </p>
            <p className="card-text">
              <b>Ежемесячный CF через год</b>
              : 100,000
            </p>
            <p className="card-text">
              <b>Потребность в доп финансировании (сумма / месяц)</b>
              : 100,000 / 02.2023
            </p>
          </div>
        </div>
        <div className="card text-bg-warning mb-3 card-info" style={{ maxWidth: '18rem' }}>
          <div className="card-body">
            <ul>
              <li><p className="card-text">CF (Cash Flow) - денежный поток</p></li>
              <li><p className="card-text">Прогнозный прериод - 12 месяцев, включая текущий</p></li>
              <li><p className="card-text">Результаты расчитаны на основе данных, предоставленных пользователем</p></li>
            </ul>
          </div>
        </div>
      </div>
      <table className="table results-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Сумма, тыс. руб</th>
            {curMonthNames.map((month, index) => <th key={index}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>Поступления от продаж</td>
            {revenueSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000) : '-'}</td>)}
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Оплата товаров и услуг</td>
            {costSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000) : '-'}</td>)}
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Инвестиции</td>
            {investmentSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000) : '-'}</td>)}
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Финансирование</td>
            {financingSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000) : '-'}</td>)}
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Денежный поток</td>
            {cfSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000) : '-'}</td>)}
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Денежный поток, накопленный</td>
            {cfCumulativeSchedule.map((data, index) => <td key={`1-${index}`}>{data ? Math.round(data / 1000) : '-'}</td>)}
          </tr>
        </tbody>
      </table>
      <div className="fin-data-group">
        <FinDataSection />
        <ProjectModal />
      </div>
      <button type="submit" className="btn btn-dark">Скачать отчет о проекте</button>
    </div>
  );
}

export default ProjectPage;
