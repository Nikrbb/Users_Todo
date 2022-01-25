export default {
    findElemId(target, user) {
        if (target.closest('.el-table__row')) {
            let parent = target.closest('.el-table__row');
            return +parent.querySelector('.cell').innerText;
        }
        return user
    }
}