import { createSlice } from "@reduxjs/toolkit";

const initialState = {

      stationtype: "Workstation",
      wsname: "",
      wsdescription: "",
      wslabname: "",
      wslabId: "",
      wslabdescription: "",
      wsconfigmemory: "",
      wsconfigcpu: "",
      wsconfigarchitecture: "",
      wsconfigmodel: "",
      wsdocuments:[],
      networkstationtype: "Network",
      ntname:"",
      ntdescription:"",
      notes: [],
      reports: [],
      serverstationtype: "Server",
      srname: "",
      srdescription: "",
      srlabname: "",
      srlabId: "",
      srlabdescription: "",
      srconfigmemory: "",
      srconfigcpu: "",
      srconfigarchitecture: "",
      srconfigmodel: "",
      srdocuments:[],
  
 
};

const createScenarioSlice = createSlice({
    name: "scenario",
    initialState,
    reducers: {
      setformValue: (state, action) => {
        const { srname,srdocuments, srdescription, srlabname,srlabdescription, srlabId, srconfigmemory, srconfigcpu, srconfigarchitecture, srconfigmodel, wsname,wsdocuments, wsdescription, wslabname,wslabdescription, wslabId, wsconfigmemory, wsconfigcpu, wsconfigarchitecture, wsconfigmodel, notes, reports,  ntname, ntdescription } = action.payload;
  
        // Update specific fields in the state
        state.srname = srname !== undefined ? srname : state.srname;
        state.srdescription = srdescription !== undefined ? srdescription : state.srdescription;
        state.srlabname = srlabname !== undefined ? srlabname : state.srlabname;
        state.srlabdescription = srlabdescription !== undefined ? srlabdescription : state.srlabdescription;
        state.srlabId = srlabId !== undefined ? srlabId : state.srlabId;
        state.srconfigmemory = srconfigmemory !== undefined ? srconfigmemory : state.srconfigmemory;
        state.srconfigcpu = srconfigcpu !== undefined ? srconfigcpu : state.srconfigcpu;
        state.srconfigarchitecture = srconfigarchitecture !== undefined ? srconfigarchitecture : state.srconfigarchitecture;
        state.srconfigmodel = srconfigmodel !== undefined ? srconfigmodel : state.srconfigmodel;
        state.srdocuments = srdocuments !== undefined ? srdocuments : state.srdocuments;


        state.wsname = wsname !== undefined ? wsname : state.wsname;
        state.wsdescription = wsdescription !== undefined ? wsdescription : state.wsdescription;
        state.wslabname = wslabname !== undefined ? wslabname : state.wslabname;
        state.wslabdescription = wslabdescription !== undefined ? wslabdescription : state.wslabId;
        state.wslabId = wslabId !== undefined ? wslabId : state.wslabId;
        state.wsconfigmemory = wsconfigmemory !== undefined ? wsconfigmemory : state.wsconfigmemory;
        state.wsconfigcpu = wsconfigcpu !== undefined ? wsconfigcpu : state.wsconfigcpu;
        state.wsconfigarchitecture = wsconfigarchitecture !== undefined ? wsconfigarchitecture : state.wsconfigarchitecture;
        state.wsconfigmodel = wsconfigmodel !== undefined ? wsconfigmodel : state.wsconfigmodel;
        state.wsdocuments = wsdocuments !== undefined ? wsdocuments : state.wsdocuments;
        state.notes = notes !== undefined ? notes : state.notes;
        state.reports = reports !== undefined ? reports : state.reports;
        state.ntname = ntname !== undefined ? ntname : state.ntname;
        state.ntdescription = ntdescription !== undefined ? ntdescription : state.ntdescription;
      },
    },
  });
  
  export const { reducer } = createScenarioSlice;
  export const { setformValue } = createScenarioSlice.actions;
  export default createScenarioSlice.reducer;
  