import { Routing } from '@/pages';
import { withMuiTheme } from './providers/withMuiTheme';
import { withQueryClient } from './providers/withQueryClient';
import { withRouter } from './providers/withRouter';
import './styles/main.css';
export const App = withMuiTheme(
  withQueryClient(
    withRouter(() => {
      return <Routing />;
    }),
  ),
);
