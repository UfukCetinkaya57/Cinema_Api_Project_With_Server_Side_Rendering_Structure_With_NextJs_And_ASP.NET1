using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;


namespace Core.DataAccess
{
    public interface IEntityRepository<T> 
        where T : class, IEntity, new()
    {

        Task<string> GetListBySimilarMovie(int movieId);
        Task<string> GetMovieById(int movieId);
        Task<string> GetMoviesBySearchKey(string searchKey);
        Task<string> GetListByUpcomingMovie();

    }
    
}
