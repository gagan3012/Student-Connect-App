/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserPreference = /* GraphQL */ `
  query GetUserPreference($id: ID!) {
    getUserPreference(id: $id) {
      id
      newsBlogsClubsPreference {
        academics
        activism
        culture
        careerDevelopment
        gradSchool
        healthAndWellbeing
        research
        recreation
        religion
        sports
      }
      sportsPreference {
        mensSportsList {
          baseball
          basketball
          crew
          crossCountry
          football
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          squash
          swimmingAndDriving
          tennis
          trackAndField
          wrestling
        }
        womensSportsList {
          basketball
          crew
          crossCountry
          fieldHockey
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          softball
          squash
          swimmingAndDriving
          tennis
          trackAndField
          volleyball
        }
      }
      academicPreference {
        arts
        business
        computerScience
        engineering
        biology
        chemistry
        physics
        psychology
        economics
        science
        statistics
        mathematics
        philosophy
        history
      }
      eventsPreference {
        subjectDepartments
        studentServices
        faculties
        universityServices
      }
      emailNotification
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserPreferences = /* GraphQL */ `
  query ListUserPreferences(
    $filter: ModeluserPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        newsBlogsClubsPreference {
          academics
          activism
          culture
          careerDevelopment
          gradSchool
          healthAndWellbeing
          research
          recreation
          religion
          sports
        }
        academicPreference {
          arts
          business
          computerScience
          engineering
          biology
          chemistry
          physics
          psychology
          economics
          science
          statistics
          mathematics
          philosophy
          history
        }
        eventsPreference {
          subjectDepartments
          studentServices
          faculties
          universityServices
        }
        emailNotification
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserData = /* GraphQL */ `
  query GetUserData($id: ID!) {
    getUserData(id: $id) {
      id
      SPUID
      displayName
      yearLevel
      email
      primarySpecialization
      campus
      faculty
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserDatas = /* GraphQL */ `
  query ListUserDatas(
    $filter: ModeluserDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        SPUID
        displayName
        yearLevel
        email
        primarySpecialization
        campus
        faculty
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getClubsTable = /* GraphQL */ `
  query GetClubsTable($clubId: String!) {
    getClubsTable(clubId: $clubId) {
      categories
      clubId
      description
      email
      facebook
      imageLink
      title
      twitter
      website
    }
  }
`;
export const listClubsTables = /* GraphQL */ `
  query ListClubsTables(
    $filter: TableClubsTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubsTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        categories
        clubId
        description
        email
        facebook
        imageLink
        title
        twitter
        website
      }
      nextToken
    }
  }
`;
export const getBlogsTable = /* GraphQL */ `
  query GetBlogsTable($blogId: String!) {
    getBlogsTable(blogId: $blogId) {
      blogId
      categories
      date
      excerpt
      link
      mediaImages {
        fullImage
        mediumImage
      }
      title
    }
  }
`;
export const listBlogsTables = /* GraphQL */ `
  query ListBlogsTables(
    $filter: TableBlogsTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogsTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        blogId
        categories
        date
        excerpt
        link
        mediaImages {
          fullImage
          mediumImage
        }
        title
      }
      nextToken
    }
  }
`;
export const getEventsTable = /* GraphQL */ `
  query GetEventsTable($eventId: String!) {
    getEventsTable(eventId: $eventId) {
      allDay
      categories
      cost
      dateModified
      description
      endDate
      eventId
      eventLocation {
        address
        city
        country
        province
        venue
        zip
      }
      excerpt
      fullImage
      link
      startDate
      status
      thumbnailImage
      title
    }
  }
`;
export const listEventsTables = /* GraphQL */ `
  query ListEventsTables(
    $filter: TableEventsTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        allDay
        categories
        cost
        dateModified
        description
        endDate
        eventId
        eventLocation {
          address
          city
          country
          province
          venue
          zip
        }
        excerpt
        fullImage
        link
        startDate
        status
        thumbnailImage
        title
      }
      nextToken
    }
  }
`;
export const getNewsTable = /* GraphQL */ `
  query GetNewsTable($newsId: String!) {
    getNewsTable(newsId: $newsId) {
      categories
      dateModified
      link
      mediaThumbnail {
        height
        url
        width
      }
      newsId
      summary
      title
    }
  }
`;
export const listNewsTables = /* GraphQL */ `
  query ListNewsTables(
    $filter: TableNewsTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        categories
        dateModified
        link
        mediaThumbnail {
          height
          url
          width
        }
        newsId
        summary
        title
      }
      nextToken
    }
  }
`;
export const getAthleticsNewsTable = /* GraphQL */ `
  query GetAthleticsNewsTable($newsId: String!) {
    getAthleticsNewsTable(newsId: $newsId) {
      newsId
      title
      link
      summary
      mediaThumbnail
      categories
      dateModified
    }
  }
`;
export const listAthleticsNewsTables = /* GraphQL */ `
  query ListAthleticsNewsTables(
    $filter: TableAthleticsNewsTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthleticsNewsTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        newsId
        title
        link
        summary
        mediaThumbnail
        categories
        dateModified
      }
      nextToken
    }
  }
`;
