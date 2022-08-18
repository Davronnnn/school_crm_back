const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'480070504025-pcvibqh1f8ao4abdutauuuecp1mjirgd.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: 'http://localhost:4000/auth/callback',
			passReqToCallback: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			return done(null, profile);
		}
	)
);
