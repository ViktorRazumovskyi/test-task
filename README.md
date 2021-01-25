getting started:
1. Run npm install
2. Populated TEST_USER_EMAIL and TEST_USR_PASSWORD values in src\constants\testUserData.ts with valid test credentials
3. Run `npm test` to run all tests

Note: This is just a test task, best practice is to avoid `browser.pause()` on real project, it's used here just  due to limited time frames on task completion 
Note: by default tests are running in headless mode, to disable headless mode comment 'headless','disable-gpu' option in wdio.conf.js line 61,62
