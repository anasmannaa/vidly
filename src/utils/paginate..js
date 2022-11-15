import _ from "lodash";

export function paginate(items, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _.slice(items, startIndex, startIndex + pageSize);
}
