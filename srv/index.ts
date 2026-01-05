import cds from '@sap/cds'

const PORT = 4004;

cds.on('listening', ({server, url }: any) => {
  console.log(`server is on ${PORT}`);
});
  console.log("Hello");


export default cds.server;


