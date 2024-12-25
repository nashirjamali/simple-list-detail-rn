import {renderHook, act} from '@testing-library/react-hooks';
import useFetch from '../useFetch';

describe('useFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return loading true initially', () => {
    const {result} = renderHook(() => useFetch('https://api.example.com/data'));
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should fetch data successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({message: 'Success'}),
      }),
    ) as jest.Mock;

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetch('https://api.example.com/data'),
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual({message: 'Success'});
    expect(result.current.error).toBeNull();
  });

  it('should handle fetch error', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    ) as jest.Mock;

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetch('https://api.example.com/data'),
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('Network response was not ok');
  });

  it('should handle network errors', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Network error')),
    ) as jest.Mock;

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetch('https://api.example.com/data'),
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('Network error');
  });
});
