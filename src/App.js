import React, { useState } from 'react';
import { BMCScreen, SideNav } from './components';
import { AppContext, contextWithoutState } from './utils/Context';

const App = () => {
  const { Provider } = AppContext;

  const [title, setTitle] = useState('');
  const [version, setVersion] = useState('');
  const [date, setDate] = useState('');
  const [keyPartners, setKeyPartners] = useState({});
  const [keyActivities, setKeyActivities] = useState({});
  const [keyResources, setKeyResources] = useState({});
  const [valuePropositions, setValuePropositions] = useState({});
  const [customerRelationships, setCustomerRelationships] = useState({});
  const [channels, setChannels] = useState({});
  const [customerSegments, setCustomerSegments] = useState({});
  const [costStructure, setCostStructure] = useState({});
  const [revenueStreams, setRevenueStreams] = useState({});

  const contextWithState = {
    ...contextWithoutState,
    title,
    setTitle,
    version,
    setVersion,
    date,
    setDate,
    keyPartners,
    setKeyPartners,
    keyActivities,
    setKeyActivities,
    keyResources,
    setKeyResources,
    valuePropositions,
    setValuePropositions,
    customerRelationships,
    setCustomerRelationships,
    channels,
    setChannels,
    customerSegments,
    setCustomerSegments,
    costStructure,
    setCostStructure,
    revenueStreams,
    setRevenueStreams,
  };

  return (
    <Provider value={contextWithState}>
      <SideNav />
      <BMCScreen />
    </Provider>
  );
};

export default App;
