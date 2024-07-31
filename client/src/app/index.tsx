import { Routing } from "@/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { withMuiTheme } from "./providers/withMuiTheme";
import { withQueryClient } from "./providers/withQueryClient";
import { withRouter } from "./providers/withRouter";
import "./styles/main.css";

export const App = withMuiTheme(
  withQueryClient(
    withRouter(() => {
      return (
        <>
          <Routing />
          <ToastContainer
            position="bottom-right"
            autoClose={1000}
            stacked={true}
          />
          ;
        </>
      );
    }),
  ),
);
