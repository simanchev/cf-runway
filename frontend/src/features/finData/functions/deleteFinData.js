async function deleteFinData(finDataId) {
  await fetch(`/api/findata/${finDataId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/json' },
  });
}

export default deleteFinData;
