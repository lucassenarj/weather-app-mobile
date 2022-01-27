import IActions from "./actions";
import ISettings from "./settings";

type IDispatch = {
  type: IActions,
  payload: ISettings,
}

export default IDispatch;
