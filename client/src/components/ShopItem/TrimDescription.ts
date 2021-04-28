const trimDescription = (descr: string): string => {
  if (descr.length > 400) {
    return descr.slice(0, 400).concat('...');
  }

  return descr;
}

export default trimDescription;
