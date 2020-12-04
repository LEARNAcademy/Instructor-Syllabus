# Continuous Integration
"Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project. The CI process is comprised of automatic tools that assert the new code's correctness before integration."

## Sign up for the free version of CircleCI using Github

https://circleci.com/signup/?source-button=free

## Set up

https://circleci.com/docs/2.0/getting-started/#section=getting-started

1. Create a new repo + react app per usual.
2. Go to https://circleci.com/dashboard to set up a new project.
3. Click on "Add Projects" on the left.

<img src="https://i.ibb.co/KW48fLd/Screen-Shot-2020-03-24-at-11-43-15-AM.png" alt="Screen-Shot-2020-03-24-at-11-43-15-AM" border="0">

4. Find your new project in the list and click "Set Up Project."

<img src="https://i.ibb.co/gjvGNzC/Screen-Shot-2020-03-24-at-11-43-27-AM.png" alt="Screen-Shot-2020-03-24-at-11-43-27-AM" border="0">

5. Add a `.circleci` folder to the root directory (this will be a hidden file) of your react app. It _must be named this_.
6. Add a `config.yml` file to your `.circleci` folder. It _must be named this_.

<img src="https://i.ibb.co/JcBf0DW/Screen-Shot-2020-03-24-at-2-08-24-PM.png" alt="Screen-Shot-2020-03-24-at-2-08-24-PM" border="0">

7. Back in circleci, select "Node" from drop-down bar. Copy the box of text into your `config.yml`. Make sure you commit and push these changes.
8. Click "Start Building."

<img src="https://i.ibb.co/zJWZY97/Screen-Shot-2020-03-24-at-11-46-07-AM.png" alt="Screen-Shot-2020-03-24-at-11-46-07-AM" border="0">

9. Click "Add Manually", etc. 
10. Wait for green build!

## Details of your build in CircleCI

Circleci dashboard. Green build.

<img src="https://i.ibb.co/71yXLRG/Screen-Shot-2020-03-24-at-11-48-40-AM.png" alt="Screen-Shot-2020-03-24-at-11-48-40-AM" border="0">

<img src="https://i.ibb.co/4p6gTgP/Screen-Shot-2020-03-24-at-11-48-52-AM.png" alt="Screen-Shot-2020-03-24-at-11-48-52-AM" border="0">

See your test suite passed!

<img src="https://i.ibb.co/kKj8t04/Screen-Shot-2020-03-24-at-11-49-08-AM.png" alt="Screen-Shot-2020-03-24-at-11-49-08-AM" border="0">

If it DIDN'T pass: update your code and push up to GitHub again. It will automatically re-run your test suite. You can also click `rerun` if need be.

<img src="https://i.ibb.co/KNgf21B/Screen-Shot-2020-03-24-at-11-49-15-AM.png" alt="Screen-Shot-2020-03-24-at-11-49-15-AM" border="0">
