async function addFinData(event, projectId, finTypeId) {
  const {
    title, sum, regular, startDate, endDate,
  } = event.target;

  await fetch(`/api/project/${projectId}/findata/new`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      fin_types_id: finTypeId,
      title: title.value,
      sum: Math.abs(sum.value),
      regular: regular.value,
      start_date: startDate.value,
      end_date: endDate.value,
    }),
  });
}

export default addFinData;
