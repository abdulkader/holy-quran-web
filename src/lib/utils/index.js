import toast from 'react-hot-toast';
import { formatToUTC } from './dateFormat';

export const addToast = (message, type = 'success') => {
  switch (type) {
  case 'success':
    toast.success(message);
    break;
  case 'loading':
    toast.loading(message);
    break;
  case 'error':
    toast.error(message);
    break;
  default:
    toast(message);
    break;
  }
};

export const handleAPIError = (error) => {
  if (error.message) {
    return addToast(error.message, 'error');
  }
  if(error.responseText){
    return addToast(error.responseText, 'error');
  }
  return addToast('There seems to be some issue with the API Server. Please try again later.', 'error');
};

export const handleAPISuccess = (data) => {
  if (data.message) {
    return addToast(data.message, 'success');
  }
};

export const getLocalSystemTime = () => {
  const currentTime = Date.now();
  const format = formatToUTC(currentTime);
  return format;
};

export const isServer = typeof window === 'undefined';

export const isClientSide = typeof window !== 'undefined';

export const sortObjectKeys = (obj) => {
  return Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),
      {}
    );
};

export const debounce = (fn, delay) => {
  let timeoutId;
  // eslint-disable-next-line func-names
  return function (...args) {
    clearInterval(timeoutId);
    // eslint-disable-next-line no-invalid-this
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};

export const loadExternalScript = (src, callback, id) => {
  const existingScript = document.getElementById(id);
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export const stripHtmlTags = (str) => {
  if (str === null || str === '') return str;
  const strs = str.toString();
  return strs.replace(/<[^>]*>/g, '').replace(/(\r\n|\n|\r)/g, ' ');
};

export const cleanPaginate = (
  totalItems = 0,
  current_page = 1,
  maxPages = 5,
  pageSize = 1
) => {
  const totalPages = totalItems;
  let currentPage = current_page;
  let prev = false;
  let next = false;
  // ensure current page isn't out of range
  if (currentPage < 1) {
    currentPage = 1;
    prev = false;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
    next = false;
  }

  let startPage;
  let endPage;
  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // calculate start and end item indexes
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  if (currentPage > 1) {
    prev = true;
  }

  if (currentPage < totalPages) {
    next = true;
  }

  // return object with all pager properties required by the view
  return {
    currentPage,
    endIndex,
    endPage,
    next,
    pages,
    pageSize,
    prev,
    startIndex,
    startPage,
    totalItems,
    totalPages,
  };
};

export const formatFolderName = (name, prefix) => {
  const path = name.slice(0, -1);
  return path.replace(prefix, '');
};

export const formatFileName = (name, prefix) => {
  return name.replace(prefix, '');
};

export const buildPathFromPrefix = (prefix) => {
  const folders = prefix.split('/').slice(0, -1);
  let tmpPath = '';
  return folders.map((item) => {
    const pathUrl = (tmpPath += item + '/');
    return {
      name: item,
      url: pathUrl,
    };
  });
};

export const removeSpecialChars = (text) => {
  return text.replace(/(@|\s|\(|\))/g, '');
};

export const removeSpecialCharsFolder = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/ +/g, '-');
};

export const removeSpecialCharsFile = (text) => {
  return text
    .replace(/ /g, '-')
    .replace(/[^.\w-]+/g, '')
    .replace(/ +/g, '-');
};

export const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const formatEditFormInputs = (obj) => {
  const result = {};
  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('.');
    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }
    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }
  return result;
};

export const pastFromClipboard = async () => {
  const copiedText = await navigator.clipboard.readText();
  return copiedText;
};

export const jsonParsable = (string) => {
  try {
    return { isJson: true, parsed: JSON.parse(string) };
  } catch (e) {
    return { isJson: false };
  }
};
