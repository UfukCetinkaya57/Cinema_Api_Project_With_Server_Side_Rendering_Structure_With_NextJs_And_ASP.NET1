using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entitites
{
    public class GetUpcomingMovieList:IEntity
    {
        public Dictionary<string, string> dates { get; set; }
        public string page { get; set; }
        public List<GetUpcomingMovie> results { get; set; }
        public int total_pages { get; set; }
        public int total_results { get; set; }
    }
}
