# personal-website

This is the scope of the project:
- Create a static ReactJS website.
- Point it to my custom domain on Google Domains, jkintana.net
- The website contents should be minimal, but should include:
	- A home page, which includes my bio.
	- A link to a secondary page, which is my personal blog. This has a link to:
		- My writeup on the CDIS panel.

The project scope does NOT include:
- Firebase databases.

Current progress:
- Day 1 (Sept 22):
	- Learned about SSH and used it to commit to GitHub.
	- Still very vague on this. Currently, I'm using Git commands, instead of the Git desktop. Current questions still include: what's a detached head, and how do I... reattach it?
- Day 2 (Sept 23):
	- Deployed a boilerplate React app on Heroku, and connected it to my domain.
	- Problem: It's unsecured. Also, it's complicated. I'll switch to Firebase, because it automatically secures itself, and I don't have to finangle with SSL certificates.
- Day 3 (Sept 24):
	- I now have the default React website hosted on my website, jkintana.net. I connected it with Firebase hosting.
	- Problem: "Learning React" is a BIG statement. Let's break it down.
		- I have found a book on React. This is pretty good, because I don't just want to learn this superficially, I want to know what I'm doing. I built websites three years ago and have no memory of how I did it, because it was all done by copying and pasting code without understanding of the fundamentals.
- Day 4 (Sept 25):
	- Busy. No coding done today.
- Day 5 (Sept 26):
	- Got myself up to speed with JS: github.com/jkintana/javascript-exercises
		- I basically did exercise 1 & 2, then skipped to 13.
- Day 6 (Sept 27)
	- Watched Firebase's videos on [React](https://www.youtube.com/watch?v=Tn6-PIqc4UM), [Redux](https://www.youtube.com/watch?v=_shA5Xwe8_4), and [Firebase](https://www.youtube.com/watch?v=vAoB4VbhRzM) to help me figure out exactly what I'm playing with here.
	- Created a .command file that automatically creates a React build and then spins up a local Firebase emulator. Very important if I want to see what I'm doing.
	- Still trying to figure out components...