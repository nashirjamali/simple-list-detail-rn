const Clipboard = {
  setString: jest.fn(),
  getString: jest.fn().mockResolvedValue(''), // Mocking getString to return an empty string
};

export default Clipboard;
