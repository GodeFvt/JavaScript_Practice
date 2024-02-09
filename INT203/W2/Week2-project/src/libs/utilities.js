function sortBySection(groups) {
  groups.sort((a, b) => a.section - b.section);
}

function getRowInPage(allItems, currentPage, rowsPerPage) {
  if (allItems === null || allItems === undefined) return undefined;
  if (allItems.length === 0) return [];
  if (rowsPerPage <= 0) return allItems;
  if (currentPage <= 0) return allItems;
  const itemsOfCurrentPage = allItems.slice(
    rowsPerPage * (currentPage - 1),
    rowsPerPage * (currentPage - 1) + rowsPerPage
  );
  return itemsOfCurrentPage.length > 0 ? itemsOfCurrentPage : [];
}

function getTotalPages(allItems, rowsPerPage) {
  if (allItems === null || allItems === undefined) return undefined;
  if (rowsPerPage === 0 || rowsPerPage === undefined || rowsPerPage === null)
    return 1;
  return Math.ceil(allItems.length / rowsPerPage);
}

export { sortBySection, getRowInPage, getTotalPages };
