using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Concrete;

namespace Business.Abstract
{
    public interface IMovieService
    {

        Task<string>GetListMovieBySearchKey(string SearchKey);
        Task<string> GetListBySimilarMovie(int movieId);
        Task<string> GetListByUpcomingMovie();
        Task<string> GetMovieById(int movieId);    
    }
}
