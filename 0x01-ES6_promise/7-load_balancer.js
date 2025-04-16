export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
  /* .then((result) => {
      console.log('Download completed:', result);
      return result;
    })
    .catch((error) => {
      console.error('Download failed:', error);
      throw error;
    }); */
}
