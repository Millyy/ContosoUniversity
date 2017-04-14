using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ContosoUniversityWebApp.Models
{
	public class Course
	{
		[DatabaseGenerated(DatabaseGeneratedOption.None)]
		public int CourseID { get; set; }
		public string Title { get; set; }
		public int Credits { get; set; }
		public string Exam { get; set; }
		public string Test { get; set; }
		public string Assignment { get; set; }
		public string AssignmentDueDate { get; set; }

		[JsonIgnore]
		public virtual ICollection<Enrollment> Enrollments { get; set; }
	}
}