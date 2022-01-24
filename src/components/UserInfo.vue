<template>
<div class="wrapper">
   <el-descriptions
    class="margin-top"
    :title="usersDetails.name"
    :column="1"
    
    without border
  >
    <template #extra>
      <slot></slot>
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
      {{ usersDetails.username }}
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
      {{ usersDetails.phone }}
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
      {{ usersDetails.address.city }}
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
      <el-tag size="small">{{ usersDetails.website }}</el-tag>
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
      <el-tag size="small">{{ usersDetails.email }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon>
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      {{ 'Str: ' + usersDetails.address.street +', ' + usersDetails.address.suite + ', Zip: '+usersDetails.address.zipcode }}
      <br>
      {{ 'Geo: lat' + usersDetails.address.geo.lat + ', lng-' + usersDetails.address.geo.lng }}
    </el-descriptions-item>
    
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon>
            <suitcase />
          </el-icon>
          Company
        </div>
      </template>
      {{ usersDetails.company.name }} 
      <br>
       {{usersDetails.company.catchPhrase }} 
      <br>
      {{ 'bs: ' + usersDetails.company.bs }}
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

export default {
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
  props: {
    usersDetails: {
      type: Object,
      required: true
    }
  }
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

</style>
