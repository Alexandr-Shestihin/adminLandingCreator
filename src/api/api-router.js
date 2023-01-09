export const API_ROUTER = {
   auth: {
      register: {
         method: 'POST',
         url: '/auth/register'
      },
      registerEvent: {
         method: 'POST',
         url: '/public/special/event/{eventName}'
      },
      logIn: {
         method: 'POST',
         url: '/auth/login'
      },
      logOut: {
         method: 'POST',
         url: '/auth/logout'
      },
      forgotPassword: {
         method: 'POST',
         url: '/auth/password/forgot'
      },
      changePassword: {
         method: 'PUT',
         url: '/app/password/change'
      },
      confirmPassword: {
         method: 'POST',
         url: '/auth/password/confirm'
      },
      confirmEmail: {
         method: 'POST',
         url: '/public/callback/email/confirm'
      }
   },
   events: {
      getEvents: {
         method: "GET",
         url: "/api/v1/events/admin/{page}/{limit}",
         headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE2ODI3MjcsImV4cCI6MTY1NTI4MjcyNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2hlc3RpaGluQGdtYWlsLmNvbSJ9.eAG4L55K0S1wCPEDZuLNXdUS45Ahv8QWotTe7kushno7KyYYgl1LRA8JJi0e8JfQGwdGO4m06VZ2QF8LxdjIec5txfWISb_GsKSEH-2ONPjiipaqI-otEDt3YAhv-VosUXDs_ANYFMOCwRhV0MO3xKR4Oixj4n6Cb8emmva8AHkfmUc72rKvbBaPT4G7LBSZmkILfL3iMNowK0s0MHHDpc55d72zV2v142Z0eMOOl_bsvJ21HTWErO0s-PfXmJ5qael69a7pLz5lS5R5TlLnrOEe7q9zP0dfL-QD4KulhKWTTSGID2uEVLk_ATERmrO5Id4865Sjsg9uSuycP83d25hHtAKcz-Uc304TuE5GCBL64cGti4DhpUPNSWNY9bjII4IUCL_9Uu7ek3vDxZO2tdeqPj0gpoOQTSXmYO2_NIPds03jtmBcD-H2WbJ2oiZ74dP0W_caRhq2aKx2lduOOTBqTUtJDhJyVwi9egTx9f55ilsiid0Aq33mFKPwSlscc8c1ILA5-Gjuy1O_vu6klPjzj4aFviihNOhj8AE9bC550U2t5vTy9mhtm9fwMMmYmyTZCHOCkM6qNqQgQxZ2otTuPA_o9XG3O5d6QEvcWQJPAuVlY3Z4BH0eNfZcTVvOgY2VAX1nbOjkrc8Ak_Idl2EHGo2RgBooOBsMcCqgNfE' }
      },

      createEvent: {
         method: "POST",
         url: "/api/v1/event",
         headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMzMjE5MDksImV4cCI6MTY1NjkyMTkwOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2hlc3RpaGluQGdtYWlsLmNvbSJ9.laHPJcaXPdHw152FnDPGOvz4WO-ZCRKOLERor1iGcr40zSU9Ch5BgjATpqGjvkJkkx0SBuXw701ujgR22BCn8KGbLqgGzOr-iZHMMb_yg9XDmtWwHpyEH_KSk1UfyNsynax99Q91vwrWuAj2bDfcDh1JCPnCC6GUczgWLmLPDZ5o2DQZ_v7Le0TbS1dNoYNuPc5LzWuTCJ1jN-tkfiT5sT_XbPyz-c-q3Hj1y-b0r83J0YDzm6AlYORbfOJ1q2b6z8079UxUZ1PNMpJa2TZ6LSxFMqXThjk9vAy7uI3h2Uv3psCJNXQh7hFW_tQl-kJwAS8zWAayAOFuS9F8_TwLSyLmPh1HduglTs1hI3s3vEHGTzXMioNJGPdKSiteoQgu6aAfqHVCZbFWjzLrcBG13scsbZZsUzUf-puWzEcMSP2d8SiL0WfsGUm159iaBke7AkQucNUg5yoEwUXSwItSYhuEnVe2F16rr0f1kqbwueo_iJV_gnQagd_N5s8-wmVhBeFh6HqkuYqBTyicD872ewK-REKhUdqwMr0khUHSthKPBsgecmKZqqBSgrZ9j--Od77Ieu8P7aO8BamYEVzhp4kDKcsob07OI9RsBkkelO0g9wA2ydF5-GbjvVTP0EBePLhKhbz0gCyEFM8gjDnVf0ADJZ2s_cZon_sy1jK6W3Q' }
      },
   },
   Tournaments: {
      getTournaments: {
         method: "GET",
         url: "/api/v1/tournaments/{page}/{limit}",
         headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMzMjkwMjQsImV4cCI6MTY1NjkyOTAyNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2hlc3RpaGluQGdtYWlsLmNvbSJ9.U1tmve-Q-z9YOSX_y3KN03Kgr_0QIpP6kjTlDrFnq9Pu4Ns8kQuTUx3lNrtnqqTUBq6s8q8iWBoQ56kdbvz-8pD-aRPq-IHCMLtOJHI2b6kE_fnlWDYU2-MgQamJlacKxX56WvxtgQlblQYPGEOqkajRaJZRWrsys0KI-oNS8TMiB3a-1_N_07mLg7JpkIdqEQPhZ3d3OrhnH81h3gwuSq0JH5EZzDn1UDNApwKOMdh2UJj1J2a2HXSdcLxmZvNeX0GBUcEGOJyBDoXzLYXjMX9tMoXJE-_HoHiGOj41lTEAzx6_95tKtneaHe0QFJmqdRV0g9PFl8o6v3mZ01UCz0HR5iAJhmiFqAbgoFTvFGoUuPtbMLjwrPQS7yR35oAdvAZlh-bmiVlYu4Z0SI15BKmQ-WsDumW_cxCt6xxcy2aB91rIUjJM1XCtNWvdfJBzc2kUr3lT2aeMeT2iVZl4nyxPlTpfPDcq0KWkT_GDYMJL_hGpVMyjqXyGYOjvd_e4NNs0IocarQUPWhX2MEu6iS6CBBqcntZp_g2gZ4YSLyoEcJrD2fp51Bcd6VbRhU7HZaIBQBTZEeDVPs333IK7wFq0ktjTwUH9tsFc4Uo_M3MBU_yBWk_3I6S1VkFQcP4D9dq_N6VbzbXPOMYjW-94CkueqsAbw64Hu3absTo-eM4' }
      },
      getTournamentsMatches: {
         method: "GET",
         url: "/public/v1/client/{tournamentId}/matches",
         headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMzMjkwMjQsImV4cCI6MTY1NjkyOTAyNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2hlc3RpaGluQGdtYWlsLmNvbSJ9.U1tmve-Q-z9YOSX_y3KN03Kgr_0QIpP6kjTlDrFnq9Pu4Ns8kQuTUx3lNrtnqqTUBq6s8q8iWBoQ56kdbvz-8pD-aRPq-IHCMLtOJHI2b6kE_fnlWDYU2-MgQamJlacKxX56WvxtgQlblQYPGEOqkajRaJZRWrsys0KI-oNS8TMiB3a-1_N_07mLg7JpkIdqEQPhZ3d3OrhnH81h3gwuSq0JH5EZzDn1UDNApwKOMdh2UJj1J2a2HXSdcLxmZvNeX0GBUcEGOJyBDoXzLYXjMX9tMoXJE-_HoHiGOj41lTEAzx6_95tKtneaHe0QFJmqdRV0g9PFl8o6v3mZ01UCz0HR5iAJhmiFqAbgoFTvFGoUuPtbMLjwrPQS7yR35oAdvAZlh-bmiVlYu4Z0SI15BKmQ-WsDumW_cxCt6xxcy2aB91rIUjJM1XCtNWvdfJBzc2kUr3lT2aeMeT2iVZl4nyxPlTpfPDcq0KWkT_GDYMJL_hGpVMyjqXyGYOjvd_e4NNs0IocarQUPWhX2MEu6iS6CBBqcntZp_g2gZ4YSLyoEcJrD2fp51Bcd6VbRhU7HZaIBQBTZEeDVPs333IK7wFq0ktjTwUH9tsFc4Uo_M3MBU_yBWk_3I6S1VkFQcP4D9dq_N6VbzbXPOMYjW-94CkueqsAbw64Hu3absTo-eM4' }
      },
      setScoreTournamentsMatches: {
         method: "PUT",
         url: "/public/v1/match/{matchId}",
         headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMzMjkwMjQsImV4cCI6MTY1NjkyOTAyNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2hlc3RpaGluQGdtYWlsLmNvbSJ9.U1tmve-Q-z9YOSX_y3KN03Kgr_0QIpP6kjTlDrFnq9Pu4Ns8kQuTUx3lNrtnqqTUBq6s8q8iWBoQ56kdbvz-8pD-aRPq-IHCMLtOJHI2b6kE_fnlWDYU2-MgQamJlacKxX56WvxtgQlblQYPGEOqkajRaJZRWrsys0KI-oNS8TMiB3a-1_N_07mLg7JpkIdqEQPhZ3d3OrhnH81h3gwuSq0JH5EZzDn1UDNApwKOMdh2UJj1J2a2HXSdcLxmZvNeX0GBUcEGOJyBDoXzLYXjMX9tMoXJE-_HoHiGOj41lTEAzx6_95tKtneaHe0QFJmqdRV0g9PFl8o6v3mZ01UCz0HR5iAJhmiFqAbgoFTvFGoUuPtbMLjwrPQS7yR35oAdvAZlh-bmiVlYu4Z0SI15BKmQ-WsDumW_cxCt6xxcy2aB91rIUjJM1XCtNWvdfJBzc2kUr3lT2aeMeT2iVZl4nyxPlTpfPDcq0KWkT_GDYMJL_hGpVMyjqXyGYOjvd_e4NNs0IocarQUPWhX2MEu6iS6CBBqcntZp_g2gZ4YSLyoEcJrD2fp51Bcd6VbRhU7HZaIBQBTZEeDVPs333IK7wFq0ktjTwUH9tsFc4Uo_M3MBU_yBWk_3I6S1VkFQcP4D9dq_N6VbzbXPOMYjW-94CkueqsAbw64Hu3absTo-eM4' }
      },
      createTournament: {
         method: 'POST',
         url: '/api/v1/tournament'
      },
   },
   userAdmin: {
      /* getUserAdmin: { //old
         method: 'GET',
         url: '/api/v1/admin/users/'
      }, */
      getUserAdmin: {
         method: 'GET',
         url: '/api/v1/admin/users/{page}/{limit}'
      },
      changeUserAdminVerified: {
         method: 'POST',
         url: '/api/v1/admin/user/verified',
      },
      changeUserAdminIsPro: {
         method: 'POST',
         url: '/api/v1/admin/user/is-pro'
      },
   },
   landing: {
      setFormDataLanding: {
         method: 'POST',
         url: '/api/v1/client/landing'
      },
      getDataLandings: {
         method: 'GET',
         url: '/api/v1/client/landings'
      },
      getDataLanding: {
         method: 'GET',
         url: '/public/v1/landing/{landingId}'
      },
      upDataLanding: {
         method: 'PUT',
         url: '/api/v1/landing/{landingId}'
      },
      getLanguagesLanding: {
         method: 'GET',
         url: '/public/labels/languages'
      },
      createLanding: {
         method: 'POST',
         url: '/api/v1/client/landing'
      },
   },
   user: {
      setUserAvatar: {
         method: 'POST',
         url: '/app/users/avatar'
      },
      setUserData: {
         method: 'PUT',
         url: '/app/users/profile'
      },
      getUserData: {
         method: 'GET',
         url: '/api/v1/my/profile'
      },
      getUserReferrals: {
         method: 'GET',
         url: '/app/referrals'
      },
      getUserDataByUrl: {
         method: 'GET',
         url: '/public/users/{url}'
      },
      getNewUsersAroundYou: {
         method: 'GET',
         url: '/app/users/{userUuid}/new-around-you'
      },
      search: {
         method: 'GET',
         url: '/public/user/search'
      },
      saveAddress: {
         method: 'PUT',
         url: '/app/users/address'
      },
      getCurrentGames: {
         method: 'GET',
         url: '/public/v1/games'
      }
   },
   public: {
      getNewUsers: {
         method: 'GET',
         url: '/public/statistics/users/new'
      },
      getCountriesList: {
         method: 'GET',
         url: '/public/labels/countries'
      },
      getCountryRegions: {
         method: 'GET',
         url: '/public/labels/countries/{country}/regions'
      },
      getCitiesByRegion: {
         method: 'GET',
         url: '/public/labels/countries/{country}/regions/{region}/cities'
      },
      getLocationByIp: {
         method: 'GET',
         url: '/public/ip/{ip}'
      },
      getPlatforms: {
         method: 'GET',
         url: '/public/catalog/platform'
      }
   },
   games: {
      getAvailable: {
         method: 'GET',
         url: '/app/games/available'
      },
      getAllowedGames: {
         method: 'GET',
         url: '/app/games/allowed'
      },
      getConnectedGames: {
         method: 'GET',
         url: '/app/users/{user}/games'
      },
      dota2: {
         getHeroesStatistic: {
            method: 'GET',
            url: '/public/users/{userUuid}/games/dota2/heroes'
         }
      },
      connect: {
         method: 'POST',
         url: '/app/games/add/{gameCode}'
      }
   },
   steam: {
      connect: {
         method: 'POST',
         url: '/app/integrations/steam/connect/{code}'
      },
      disconnect: {
         method: 'DELETE',
         url: '/app/integrations/steam'
      },
      signIn: {
         method: 'POST',
         url: '/auth/steam/sign-in'
      },
      signUp: {
         method: 'POST',
         url: '/auth/steam/sign-up'
      },
      getProfile: {
         method: 'POST',
         url: '/public/steam/profile'
      },
      getProfileDetails: {
         method: 'GET',
         url: '/app/integrations/steam/user/player-summaries/v2/{steamId}'
      }
   },
   chat: {
      getUserChats: {
         method: 'GET',
         url: '/app/chats'
      },
      createNewChat: {
         method: 'POST',
         url: '/app/chats'
      },
      getChatInfo: {
         method: 'GET',
         url: '/app/chats/{chatUuid}'
      },
      getChatMessages: {
         method: 'GET',
         url: '/app/chats/{chatUuid}/messages'
      },
      sendMessage: {
         method: 'POST',
         url: '/app/chats/{chatUuid}/messages'
      },
      deleteChat: {
         method: 'DELETE',
         url: '/app/chats/{chatUuid}'
      }
   },
   notifications: {
      getUserNotifications: {
         method: 'GET',
         url: '/app/notifications'
      },
      markSingleAsViewed: {
         method: 'PATCH',
         url: '/app/notifications/{notificationUuid}/view'
      },
      markArrayAsViewed: {
         method: 'PATCH',
         url: '/app/notifications/view'
      }
   },
   friendship: {
      addFriend: {
         method: 'POST',
         url: '/app/friendship/{userUuid}'
      },
      approveRequest: {
         method: 'POST',
         url: '/app/friendship/{friendshipUuid}/approve'
      },
      declineRequest: {
         method: 'POST',
         url: '/app/friendship/{friendshipUuid}/decline'
      },
      getFriendsList: {
         method: 'GET',
         url: '/app/friendships'
      },
      getRequestsList: {
         method: 'GET',
         url: '/app/friendships/received'
      }
   },
   rating: {
      getPlayersListByGame: {
         method: 'GET',
         url: '/public/games/{game}/ratings'
      }
   },
   external: {
      getIpAddress: {
         method: 'GET',
         url: 'https://api.ipify.org/'
      }
   },
   institutions: {
      search: {
         method: 'GET',
         url: '/app/institutions/search'
      },
      add: {
         method: 'POST',
         url: '/app/institutions'
      }
   },
   education: {
      get: {
         method: 'GET',
         url: '/app/educations'
      },
      add: {
         method: 'POST',
         url: '/app/educations'
      },
      edit: {
         method: 'PATCH',
         url: '/app/educations/{uuid}'
      },
      delete: {
         method: 'DELETE',
         url: '/app/educations/{uuid}'
      }
   },
   community: {
      getCommunities: {
         method: 'GET',
         url: '/api/v1/communities/admin/{page}/{limit}'
      },
      getCommunityList: {                 // old
         method: 'GET',
         url: '/app/community'
      },
      getCommunityDetails: {              // old
         method: 'GET',
         url: '/app/community/{communityUuid}'
      },
      getList: {                          // old
         method: 'GET',
         url: '/app/users/communities'
      },
      create: {                           // old
         method: 'POST',
         url: '/app/community'
      },
      search: {                           // old
         method: 'GET',
         url: '/app/community'
      },
      join: {
         method: 'POST',
         url: '/app/community/{uuid}/join'
      },
      leave: {
         method: 'POST',
         url: '/app/community/{uuid}/leave'
      },
      leaderboard: {
         method: 'GET',
         url: '/public/games/{gameCode}/community/{communityUuid}'
      },
      createNewCommunity: {
         method: 'POST',
         url: '/app/community'
      },
      uploadImage: {
         method: 'POST',
         url: '/app/community/{communityUuid}/image'
      },
      createCommunity: {
         method: 'POST',
         url: '/api/v1/community'
      }
   },
   // battles: {
   //     getBattlesList: {
   //         method: 'GET',
   //         url: '/public/battles'
   //     },
   //     getPopular: {
   //         method: 'GET',
   //         url: '/public/battles/info/popular'
   //     },
   //     getAside: {
   //         method: 'GET',
   //         url: '/public/battles/info/aside'
   //     },
   //     getBattleInfo: {
   //         method: 'GET',
   //         url: '/public/battles/{uuid}'
   //     },
   //     getParticipantBoard: {
   //         method: 'GET',
   //         url: '/public/battles/{battle}/ratings'
   //     },
   //     voteForParticipant: {
   //         method: 'POST',
   //         url: '/app/battles/{battle}/participants/{participant}/vote'
   //     }
   // },
   comparison: {
      getList: {
         method: 'POST',
         url: '/public/comparisons'
      }
   },
   getQRCode: {
      method: 'GET',
      url: '/app/users/id-pass-qr-code'
   },
   teams: {
      createTeam: {
         method: 'POST',
         url: '/app/teams'
      },
      updateTeam: {
         method: 'PATCH',
         url: '/app/teams/{team}'
      },
      addTeamImage: {
         method: 'POST',
         url: '/app/teams/{teamUuid}/image'
      },
      setDesiredGames: {
         method: 'PATCH',
         url: '/app/users/me/desired-teams'
      },
      getMyRequests: {
         method: 'GET',
         url: '/app/team-requests/my'
      },
      getMyTeams: {
         method: 'GET',
         url: '/app/users/{userUuid}/teams'
      },
      getTeamDetails: {
         method: 'GET',
         url: '/app/teams/{teamUuid}'
      },
      getTeamRequests: {
         method: 'GET',
         url: '/app/team/{teamUuid}/requests'
      },
      find: {
         method: 'GET',
         url: '/app/teams'
      },
      leaveTeam: {
         method: 'POST',
         url: '/app/teams/{teamUuid}/leave'
      },
      inviteUser: {
         method: 'POST',
         url: '/app/teams/{teamUuid}/invite'
      },
      requestAccept: {
         method: 'POST',
         url: '/app/team-requests/{requestUuid}/accept'
      },
      requestCancel: {
         method: 'POST',
         url: '/app/team-requests/{requestUuid}/cancel'
      },
      movePlayer: {
         method: 'POST',
         url: '/app/team-members/{teamMember}/move'
      },
      kickPlayer: {
         method: 'POST',
         url: '/app/team-members/{teamMember}/exclude'
      },
      makeCaptain: {
         method: 'POST',
         url: '/app/team-members/{teamMember}/capitan'
      },
      referral: {
         method: 'GET',
         url: '/app/teams/referral/{referral}'
      }
   },
   tournaments: {
      /*       getTournaments: {
               method: 'GET',
               url: '/api/v1/tournaments/{page}/{limit}'
            }, */
      getPrimaryTournaments: {
         method: 'GET',
         url: '/public/tournaments/primary'
      },
      getTournamentDetails: {
         method: 'GET',
         url: '/public/tournaments/{tournamentUuid}'
      },
      getStageList: {
         method: 'GET',
         url: '/app/tournament/{tournament}/stage'
      },
      joinTournament: {
         method: 'POST',
         url: '/app/tournament/{tournament}/member/{member}'
      },
      createStage: {
         method: 'POST',
         url: '/app/tournament/{tournament}/stage'
      },
      getMatchDetails: {
         method: 'GET',
         url: '/app/tournament/stage/match/{matchUuid}'
      },
      userReady: {
         method: 'POST',
         url: '/app/tournament/stage/match/ready/{matchUuid}'
      },
      polls: {
         getPoll: {
            method: 'GET',
            url: '/app/polls/{poll}'
         },
         ban: {
            method: 'POST',
            url: '/app/poll-options/{option}/ban'
         },
         pick: {
            method: 'POST',
            url: '/app/poll-options/{option}/pick'
         }
      },
      startMatch: {
         method: 'POST',
         url: '/app/tournament/stage/match/cs/{csMatchUuid}'
      },
      getStageRounds: {
         method: 'GET',
         url: '/app/tournament/stage/{stage}/round'
      }
   },
   support: {
      method: "POST",
      url: "/public/v1/contact",
   },
   media: {
      method: "POST",
      url: "/api/v1/media",
   },
};

