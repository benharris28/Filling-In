import Airtable from 'airtable';

export const getShiftRecords = (userId) => {
  return new Promise((resolve, reject) => {
    // Connect to Airtable
    const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base(
      'appHZw8p3zb6QrFz3'
    );

    // Get shift records where user_id equals Auth0 user id
    airtable('Shifts')
      .select({
        filterByFormula: `{user_id} = "${userId}"`,
      })
      .firstPage((error, records) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(records);
      });
  });
};

