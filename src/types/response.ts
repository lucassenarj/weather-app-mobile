import ILocation from "./location";

type IResponse = {
  status: number;
  response: string | ILocation;
};

export default IResponse;
