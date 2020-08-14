HEADER TITLE (TBD) idea: Movie Mate, My Movie, Movie Club, (add your idea here)


Login Page
    Register if you don’t have an account
Login if you already have an account
    Delete my account

Homepage
My Movies
    View all my reviewed movies
    Modify my review 
    Add a review
    Delete my review
    Back the to Homepage
View my watched movies	
    Add a watched movie
    Delete a watched movie
    Back the to Homepage
Want to watch
    Add a movie to my wish list 
    Delete a movie from my wish list
    Back the to Homepage
Review a movie
    Pick a movie to review
    Back the to Homepage
View reviews for a movie
    Pick a movie
    View the comments for this review.
    Comment the movie 
    Back the to Homepage
View my comments for a review
    All my comments
    Delete my comment
    Back the to Homepage
    Browse in theater movies
My Profile
    Update my username information
    Update my age information
    Back the to Homepage
Exit/Logout 

###############################################
Movie ==== <  Review >==== User
			    ||
			    ^
		      Comment
###############################################
Movies Table
Title: string
Genre: string
Release_date: datetime
In_theaters: boolean
###############################################
Reviews Table
User_id: integer
Movie_id: integer
Review: string
Rating: integer

###############################################
Users Table
Name: string
Age: integer
Occupation: string

#####################################
Comments Table
Id: integer
Name: string
Comment: string


##################################
API/Tools
################################
TTY::prompt
TTY::Table
gem colorize
