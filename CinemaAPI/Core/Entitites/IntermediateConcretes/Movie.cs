using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core;

namespace Entities.Concrete
{
    public class Movie: IEntity
    {

        public string poster_path { get; set; }
        public bool adult { get; set; }
        public string overview { get; set; }
        public string release_date { get; set; }
        public int id { get; set; }
        public string original_title { get; set; }
        public string original_language { get; set; }
        public string title { get; set; }
        public string backdrop_path { get; set; }
        public double popularity { get; set; }
        public double vote_count { get; set; }
        public bool video { get; set; }
        public double vote_average { get; set; }

    }
}
