<template>
<div>
 <el-descriptions
    class="margin-top id_card"
    :title="userDetails.name +' #' + userDetails.id"
    :column="1"
    border
  >
    <template #extra>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon>
            <user />
          </el-icon>
          Username
        </div>
      </template>
      {{ userDetails.username }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon>
            <iphone />
          </el-icon>
          Telephone
        </div>
      </template>
      {{ userDetails.phone }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon>
            <location />
          </el-icon>
          City
        </div>
      </template>
      {{ userDetails.address.city }}
    </el-descriptions-item>
     <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon>
            <tickets />
          </el-icon>
          Website
        </div>
      </template>
      <el-tag size="small">{{ userDetails.website }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon>
            <eleme />
          </el-icon>
          Email
        </div>
      </template>
      <el-tag size="small">{{ userDetails.email }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item v-if="userDetails.address">
      <template #label>
        <div class="cell-item">
          <el-icon>
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      <span >{{ 'Str: ' + userDetails.address.street +', ' + userDetails.address.suite + ', Zip: '+userDetails.address.zipcode }}</span>
      <br>
      <span v-if="userDetails.address.geo">{{ 'Geo: lat' + userDetails.address.geo.lat + ', lng-' + userDetails.address.geo.lng }}</span>
    </el-descriptions-item>

    
    <el-descriptions-item v-if="userDetails.company">
      <template #label>
        <div class="cell-item">
          <el-icon>
            <suitcase />
          </el-icon>
          Company
        </div>
      </template>
      {{ userDetails.company.name }} 
      <br>
       {{userDetails.company.catchPhrase }} 
      <br>
      {{ 'bs: ' + userDetails.company.bs }}
    </el-descriptions-item>
  </el-descriptions>
</div>


</template>

<script>
import {
  User,
  Iphone,
  Location,
  Suitcase,
  Tickets,
  Eleme,
  OfficeBuilding,
} from '@element-plus/icons-vue'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      node: false
    }
  },
  components: {
    User,
    Iphone,
    Location,
    Suitcase,
    Eleme,
    Tickets,
    OfficeBuilding,
  },
  name: `UsersInfo`,
  computed: {
    ...mapGetters([
      'userById',
    ]),
    userDetails() {
      return this.userById
    }

  },
}
</script>

<style scoped>
.wrapper {

  border: 1px solid #c0c4ccc5;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto 0;
  max-width: 740px;
  min-width: 500px;
}

.id_card {
  max-width: 740px;
  margin: 50px auto 0;
}

</style>
