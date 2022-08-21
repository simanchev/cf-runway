async function updateFinData(event, finDataId) {
  const {
    title, sum, regular, startDate, endDate,
  } = event.target;
  await fetch(`/api/findata/${finDataId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      title: title.value,
      sum: sum.value,
      regular: regular.value,
      start_date: startDate.value,
      end_date: endDate.value,
    }),
  });
}

export default updateFinData;
