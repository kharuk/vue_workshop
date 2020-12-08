import moment from 'moment';
import i18n from '../configs/i18n';

export default {
  filters: {
    formatDate(val) {
      if (!val) {
        return '-';
      }

      let date = val.toDate();
      moment.locale(i18n.locale);
      return moment(date).fromNow();
    },
  },
};
