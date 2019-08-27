import { getMovie } from './apiCalls.js';

describe('getMovie', () => {
  let mockMovie;
  beforeEach(() => {
    mockMovie = {
      title: 'The Empire Strikes Back',
      opening_crawl: 'Information about the movie'
    }
  });

  it('should get a random movie from SWAPI' , () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({mockMovie})
      });
    });
    getMovie(3);
    expect(fetch).toHaveBeenCalledWith(`https://swapi.co/api/films/3`);
  });

  it('should return a movie', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovie)
      })
    });
    expect(getMovie(3)).resolves.toEqual(mockMovie);
  });

  it('should throw an error with the response is not ok (SAD)', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getMovie(3)).rejects.toEqual(Error('Error with response.'));
  });

  it('should return catch error if promise rejects (SAD)', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down'
      })
    });
    expect(getMovie(3)).rejects.toEqual(Error('Server is down'));
  });
});



