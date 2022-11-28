using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.DataAccess;
using DataAccess.Abstract;
using Entities.Concrete;
using Newtonsoft.Json;

namespace DataAccess.Concrete.Themoviedb
{
    public class TMDbGetMoviesDal : TMDbEntityRepositoryBase<GetMovies>, IMovieDal
    {
    }   
}
