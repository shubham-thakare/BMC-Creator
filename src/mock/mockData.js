export const mockState = {
  app: {
    title: 'BMC-Creator',
    version: '1.0.0',
  },
  title: 'Business Model Canvas Title',
  version: '1.0.0',
  date: '13 Apr, 2020',
  noteTitle: 'Test title',
  noteDescription: 'Test description',
  noteBackgroundColor: '#f5f8fa',
  noteTextColor: '#000000',
  activeKey: 'keyPartners',
  updateNoteKey: 1587532687006,
  isDialogOpen: true,
  keyPartners: {
    notes: [
      {
        key: 1587532687006,
        title: 'Test note 1',
        description: 'Test description',
        background: 'red',
        color: 'white',
      },
      {
        key: new Date().getTime() + 1,
        title: 'Test note 2',
        description: 'Test description',
        background: 'red',
        color: 'white',
      },
      {
        key: new Date().getTime() + 2,
        title: '',
        description: 'Test description',
        background: undefined,
        color: 'white',
      },
      {
        key: new Date().getTime() + 3,
        title: 'Test note 2',
        description: '',
        background: 'red',
        color: 'white',
      },
    ],
  },
  keyActivities: { notes: [] },
  keyResources: { notes: [] },
  valuePropositions: { notes: [] },
  customerRelationships: { notes: [] },
  channels: { notes: [] },
  customerSegments: { notes: [] },
  costStructure: { notes: [] },
  revenueStreams: { notes: [] },
};
