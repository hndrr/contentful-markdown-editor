import contentful from 'contentful-management';
import { Environment } from 'contentful-management/dist/typings/entities/environment';

const TOKEN = "CONTENTFUL_MANAGEMENT_TOKEN";
const SPACE = "CONTENTFUL_SPACE_ID";
const ENV = "CONTENTFUL_ENVIRONMENT_ID";

const contentfulMgmtClient = async () => {
  const client = contentful.createClient({
    accessToken: TOKEN,
  });
  const mySpace = await client.getSpace(SPACE);

  return await mySpace.getEnvironment(ENV);
};

export default contentfulMgmtClient;
