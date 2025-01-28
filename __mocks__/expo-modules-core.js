const EventEmitter = jest.fn(() => ({
  addListener: jest.fn(),
  removeListener: jest.fn(),
  removeAllListeners: jest.fn(),
  emit: jest.fn(),
}));

export { EventEmitter };
export default {
  EventEmitter,
};
