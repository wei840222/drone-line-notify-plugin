(async function () {
    const axios = require('axios')

    const {
        DRONE_REPO_NAME,
        DRONE_COMMIT_MESSAGE,
        DRONE_COMMIT_BRANCH,
        DRONE_BUILD_EVENT,
        DRONE_COMMIT_AUTHOR,
        CI_BUILD_NUMBER,
        DRONE_BUILD_STATUS,
        DRONE_COMMIT_LINK,
        PLUGIN_ACCESS_TOKEN
    } = process.env

    await axios.post('https://notify-api.line.me/api/notify',
        `message=
Repo: ${DRONE_REPO_NAME}
Branch: ${DRONE_COMMIT_BRANCH}
Author: ${DRONE_COMMIT_AUTHOR}
Event: ${DRONE_BUILD_EVENT}
Commit Message: ${DRONE_COMMIT_MESSAGE}
Drone Build number: ${CI_BUILD_NUMBER}
Drone Build status: ${DRONE_BUILD_STATUS}
Changes: ${DRONE_COMMIT_LINK}`,
        {
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${PLUGIN_ACCESS_TOKEN}`
            }
        }
    ).catch(err => console.log(err))
})()