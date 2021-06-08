import * as React from 'react';

export const App = (): React.ReactElement => {
  const [appName, setAppName] = React.useState<string>('');

  React.useEffect(() => {
    setAppName('World');
  }, [])
  return <div>Hello {appName}</div>
}