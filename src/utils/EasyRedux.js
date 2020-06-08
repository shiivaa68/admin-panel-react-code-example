class EasyRedux {
  constructor(name) {
    this.name = name;
    this.actionTypes = {
      resetCache: `${name}/RESET_CACHE`
    };
    this.reducer = {};
    this.actions = {
      resetCache: () => ({ type: this.actionTypes.resetCache })
    };
    this.initialState = {};

    this.generateActionsAndInitialState();
    this.generateReducer();
  }

  generateActionsAndInitialState = () => {
    this.actionTypes = {
      ...this.actionTypes,
      load: `${this.name}/LOAD`,
      loadSuccess: `${this.name}/LOAD_SUCCESS`,
      loadFailure: `${this.name}/LOAD_FAILURE`
    };

    this.initialState = {
      loading: false,
      loaded: false,
      error: {},
      data: {},
      form: {}
    };

    const { load, loadSuccess, loadFailure } = this.actionTypes;
    this.actions = {
      ...this.actions,
      load: (payload = {}) => ({
        type: load,
        payload
      }),
      loadSuccess: (payload = {}) => ({
        type: loadSuccess,
        payload
      }),
      loadFailure: (payload = {}) => ({
        type: loadFailure,
        payload
      })
    };
  };

  generateReducer = () => {
    this.reducer = (state = this.initialState, action) => {
      switch (action.type) {
        case `${this.name}/LOAD`:
          return {
            ...state,
            loading: true,
            loaded: false,
            form: action.payload
          };
        case `${this.name}/LOAD_SUCCESS`:
          return {
            ...state,
            loading: false,
            loaded: true,
            data: action.payload
          };
        case `${this.name}/LOAD_FAILURE`:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: action.payload
          };
        case `${this.name}/RESET_CACHE`:
          return this.initialState;
        default:
          return state;
      }
    }
  };
}

export default EasyRedux;
