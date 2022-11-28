using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;

namespace Business.Concrete
{
    public class MovieManager: IMovieService
    {
        IMovieDal _movieDal;

        public MovieManager(IMovieDal movieDal)
        {
            _movieDal = movieDal;
        }

        public Task<string> GetListBySimilarMovie(int movieId)
        {
            var result = _movieDal.GetListBySimilarMovie(movieId);
            return result;
        }

        public Task<string> GetListByUpcomingMovie()
        {
            var result = _movieDal.GetListByUpcomingMovie();
            return result;
        }

        public Task<string> GetListMovieBySearchKey(string SearchKey)
        {
            var result= _movieDal.GetMoviesBySearchKey(SearchKey);
            return result;
        }



        public Task<string> GetMovieById(int movieId)
        {
            var result = _movieDal.GetMovieById(movieId);
            return result;
        }
    }
}
