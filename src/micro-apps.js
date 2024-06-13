
import mainStore from "./store/store";
import incrementMicro2 from "./actions/counter2";
const microApps = [
  {
    name: "micro-react1",
    entry: "//localhost:3001/",
    container: "#container",
    activeRule: "/micro-react1",
    props:{
      mainStore
    }
  },
  { 
    name: "micro-react2",
    entry: "//localhost:3002/",
    container: "#container",
    activeRule: "/micro-react2",
    props:{
      mainStore,
      incrementMicro2
    }
  },
];

export default microApps;
