using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entitites
{
    public class GetMovieByIdList:IEntity
    {
        public string page { get; set; }
        public List<GetMovieById> results { get; set; }
        public int total_results { get; set; }
        public int total_pages { get; set; }
    }
}
