# 40Q University

## Installation

1. Clone this repository: `git clone git@github.com:40Q/40q-university.git && cd 40q-university` 

1. Run `yarn && yarn build`. Watch-out if you are on the right branch

1. Create `trellis/.vault_pass` file and ask a PM for the password

1. Change permissions of that file `cd trellis && chmod 600 .vault_pass && cd ..`

1. Initialize trellis and then create dotenv file `trellis init & trellis dotenv`

1. Run `composer install`

1. Create Valet or Herd link inside project's public folder: `cd public && valet link university.40q && cd ..` or `cd public && herd link university.40q && cd ..`

1. Create MySQL user and database `mysql -u root`
```
CREATE DATABASE `university_40q_agency_development`;
CREATE USER 'university_40q_agency'@'localhost' IDENTIFIED BY 'example_dbpassword';
GRANT ALL PRIVILEGES ON `university_40q_agency_development`.* TO 'university_40q_agency'@'localhost';
```

8. Install Wordpress: `wp core install --url=university.40q.test --title=Example --admin_user=admin --admin_password=admin --admin_email=admin@admin.com`

You should be able to see the site at http://university.40q.test/

## DB & Data Sync
1. Sync your database and files. Go to `cd scripts` and then  `./sync.sh production development --local`
## Environments

* Production: https://university.40q.agency

## Login URL

Use this sub page to access the wp-admin: `/wp/wp-admin`.

## Development Guidance

* Create new features branching from `main` branch.
* Submit a pull request when you're done with a task, using `main` as the base branch.
* Never push to `main` directly.
