# `oceanAksNp` Submodule <a name="`oceanAksNp` Submodule" id="@cdktf/provider-spotinst.oceanAksNp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksNp <a name="OceanAksNp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np spotinst_ocean_aks_np}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNp;

OceanAksNp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .aksClusterName(java.lang.String)
    .aksInfrastructureResourceGroupName(java.lang.String)
    .aksRegion(java.lang.String)
    .aksResourceGroupName(java.lang.String)
    .availabilityZones(java.util.List<java.lang.String>)
    .controllerClusterId(java.lang.String)
    .name(java.lang.String)
//  .autoscaler(OceanAksNpAutoscaler)
//  .enableNodePublicIp(java.lang.Boolean)
//  .enableNodePublicIp(IResolvable)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .filters(OceanAksNpFilters)
//  .headrooms(IResolvable)
//  .headrooms(java.util.List<OceanAksNpHeadrooms>)
//  .health(OceanAksNpHealth)
//  .id(java.lang.String)
//  .kubernetesVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .linuxOsConfig(IResolvable)
//  .linuxOsConfig(java.util.List<OceanAksNpLinuxOsConfig>)
//  .maxCount(java.lang.Number)
//  .maxPodsPerNode(java.lang.Number)
//  .minCount(java.lang.Number)
//  .osDiskSizeGb(java.lang.Number)
//  .osDiskType(java.lang.String)
//  .osSku(java.lang.String)
//  .osType(java.lang.String)
//  .podSubnetIds(java.util.List<java.lang.String>)
//  .scheduling(OceanAksNpScheduling)
//  .spotPercentage(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<OceanAksNpTaints>)
//  .updatePolicy(OceanAksNpUpdatePolicy)
//  .vnetSubnetIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksClusterName">aksClusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksInfrastructureResourceGroupName">aksInfrastructureResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksRegion">aksRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksResourceGroupName">aksResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#name OceanAksNp#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.enableNodePublicIp">enableNodePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.headrooms">headrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>></code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#id OceanAksNp#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.linuxOsConfig">linuxOsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.minCount">minCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osSku">osSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.podSubnetIds">podSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>></code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.vnetSubnetIds">vnetSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aksClusterName`<sup>Required</sup> <a name="aksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksClusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}.

---

##### `aksInfrastructureResourceGroupName`<sup>Required</sup> <a name="aksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksInfrastructureResourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}.

---

##### `aksRegion`<sup>Required</sup> <a name="aksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}.

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.aksResourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}.

---

##### `controllerClusterId`<sup>Required</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.controllerClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#name OceanAksNp#name}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.autoscaler"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#autoscaler OceanAksNp#autoscaler}

---

##### `enableNodePublicIp`<sup>Optional</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.enableNodePublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#filters OceanAksNp#filters}

---

##### `headrooms`<sup>Optional</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.headrooms"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>>

headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#headrooms OceanAksNp#headrooms}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.health"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#health OceanAksNp#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#id OceanAksNp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesVersion`<sup>Optional</sup> <a name="kubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.kubernetesVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}.

---

##### `linuxOsConfig`<sup>Optional</sup> <a name="linuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.linuxOsConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#linux_os_config OceanAksNp#linux_os_config}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.maxCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}.

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.maxPodsPerNode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}.

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.minCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}.

---

##### `osDiskSizeGb`<sup>Optional</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osDiskSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}.

---

##### `osDiskType`<sup>Optional</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osDiskType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}.

---

##### `osSku`<sup>Optional</sup> <a name="osSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}.

---

##### `podSubnetIds`<sup>Optional</sup> <a name="podSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.podSubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}.

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#scheduling OceanAksNp#scheduling}

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.spotPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.taints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#taints OceanAksNp#taints}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#update_policy OceanAksNp#update_policy}

---

##### `vnetSubnetIds`<sup>Optional</sup> <a name="vnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.vnetSubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler">putAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms">putHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig">putLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler">resetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp">resetEnableNodePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHeadrooms">resetHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetKubernetesVersion">resetKubernetesVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLinuxOsConfig">resetLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount">resetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb">resetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType">resetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsSku">resetOsSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetPodSubnetIds">resetPodSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVnetSubnetIds">resetVnetSubnetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaler` <a name="putAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler"></a>

```java
public void putAutoscaler(OceanAksNpAutoscaler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters"></a>

```java
public void putFilters(OceanAksNpFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---

##### `putHeadrooms` <a name="putHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms"></a>

```java
public void putHeadrooms(IResolvable OR java.util.List<OceanAksNpHeadrooms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>>

---

##### `putHealth` <a name="putHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth"></a>

```java
public void putHealth(OceanAksNpHealth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `putLinuxOsConfig` <a name="putLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig"></a>

```java
public void putLinuxOsConfig(IResolvable OR java.util.List<OceanAksNpLinuxOsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling"></a>

```java
public void putScheduling(OceanAksNpScheduling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints"></a>

```java
public void putTaints(IResolvable OR java.util.List<OceanAksNpTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy"></a>

```java
public void putUpdatePolicy(OceanAksNpUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---

##### `resetAutoscaler` <a name="resetAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler"></a>

```java
public void resetAutoscaler()
```

##### `resetEnableNodePublicIp` <a name="resetEnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp"></a>

```java
public void resetEnableNodePublicIp()
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand"></a>

```java
public void resetFallbackToOndemand()
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetHeadrooms` <a name="resetHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHeadrooms"></a>

```java
public void resetHeadrooms()
```

##### `resetHealth` <a name="resetHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth"></a>

```java
public void resetHealth()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId"></a>

```java
public void resetId()
```

##### `resetKubernetesVersion` <a name="resetKubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetKubernetesVersion"></a>

```java
public void resetKubernetesVersion()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLinuxOsConfig` <a name="resetLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLinuxOsConfig"></a>

```java
public void resetLinuxOsConfig()
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount"></a>

```java
public void resetMaxCount()
```

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode"></a>

```java
public void resetMaxPodsPerNode()
```

##### `resetMinCount` <a name="resetMinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount"></a>

```java
public void resetMinCount()
```

##### `resetOsDiskSizeGb` <a name="resetOsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb"></a>

```java
public void resetOsDiskSizeGb()
```

##### `resetOsDiskType` <a name="resetOsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType"></a>

```java
public void resetOsDiskType()
```

##### `resetOsSku` <a name="resetOsSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsSku"></a>

```java
public void resetOsSku()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetPodSubnetIds` <a name="resetPodSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetPodSubnetIds"></a>

```java
public void resetPodSubnetIds()
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetScheduling"></a>

```java
public void resetScheduling()
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage"></a>

```java
public void resetSpotPercentage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints"></a>

```java
public void resetTaints()
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetUpdatePolicy"></a>

```java
public void resetUpdatePolicy()
```

##### `resetVnetSubnetIds` <a name="resetVnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVnetSubnetIds"></a>

```java
public void resetVnetSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAksNp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNp;

OceanAksNp.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNp;

OceanAksNp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNp;

OceanAksNp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNp;

OceanAksNp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanAksNp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanAksNp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanAksNp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanAksNp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanAksNp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference">OceanAksNpFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headrooms">headrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList">OceanAksNpHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfig">linuxOsConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList">OceanAksNpLinuxOsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference">OceanAksNpSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference">OceanAksNpUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput">aksClusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput">aksInfrastructureResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput">aksRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput">aksResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput">autoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput">controllerClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput">enableNodePublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headroomsInput">headroomsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersionInput">kubernetesVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfigInput">linuxOsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput">maxCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput">minCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput">osDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput">osDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSkuInput">osSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIdsInput">podSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput">spotPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput">taintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIdsInput">vnetSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName">aksClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName">aksInfrastructureResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion">aksRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName">aksResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp">enableNodePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSku">osSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIds">podSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIds">vnetSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler"></a>

```java
public OceanAksNpAutoscalerOutputReference getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filters"></a>

```java
public OceanAksNpFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference">OceanAksNpFiltersOutputReference</a>

---

##### `headrooms`<sup>Required</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headrooms"></a>

```java
public OceanAksNpHeadroomsList getHeadrooms();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList">OceanAksNpHeadroomsList</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health"></a>

```java
public OceanAksNpHealthOutputReference getHealth();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a>

---

##### `linuxOsConfig`<sup>Required</sup> <a name="linuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfig"></a>

```java
public OceanAksNpLinuxOsConfigList getLinuxOsConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList">OceanAksNpLinuxOsConfigList</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.scheduling"></a>

```java
public OceanAksNpSchedulingOutputReference getScheduling();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference">OceanAksNpSchedulingOutputReference</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints"></a>

```java
public OceanAksNpTaintsList getTaints();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicy"></a>

```java
public OceanAksNpUpdatePolicyOutputReference getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference">OceanAksNpUpdatePolicyOutputReference</a>

---

##### `aksClusterNameInput`<sup>Optional</sup> <a name="aksClusterNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput"></a>

```java
public java.lang.String getAksClusterNameInput();
```

- *Type:* java.lang.String

---

##### `aksInfrastructureResourceGroupNameInput`<sup>Optional</sup> <a name="aksInfrastructureResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput"></a>

```java
public java.lang.String getAksInfrastructureResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `aksRegionInput`<sup>Optional</sup> <a name="aksRegionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput"></a>

```java
public java.lang.String getAksRegionInput();
```

- *Type:* java.lang.String

---

##### `aksResourceGroupNameInput`<sup>Optional</sup> <a name="aksResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput"></a>

```java
public java.lang.String getAksResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `autoscalerInput`<sup>Optional</sup> <a name="autoscalerInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput"></a>

```java
public OceanAksNpAutoscaler getAutoscalerInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `controllerClusterIdInput`<sup>Optional</sup> <a name="controllerClusterIdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput"></a>

```java
public java.lang.String getControllerClusterIdInput();
```

- *Type:* java.lang.String

---

##### `enableNodePublicIpInput`<sup>Optional</sup> <a name="enableNodePublicIpInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput"></a>

```java
public java.lang.Object getEnableNodePublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput"></a>

```java
public java.lang.Object getFallbackToOndemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filtersInput"></a>

```java
public OceanAksNpFilters getFiltersInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---

##### `headroomsInput`<sup>Optional</sup> <a name="headroomsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headroomsInput"></a>

```java
public java.lang.Object getHeadroomsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>>

---

##### `healthInput`<sup>Optional</sup> <a name="healthInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput"></a>

```java
public OceanAksNpHealth getHealthInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesVersionInput`<sup>Optional</sup> <a name="kubernetesVersionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersionInput"></a>

```java
public java.lang.String getKubernetesVersionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `linuxOsConfigInput`<sup>Optional</sup> <a name="linuxOsConfigInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfigInput"></a>

```java
public java.lang.Object getLinuxOsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>>

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput"></a>

```java
public java.lang.Number getMaxCountInput();
```

- *Type:* java.lang.Number

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput"></a>

```java
public java.lang.Number getMaxPodsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `minCountInput`<sup>Optional</sup> <a name="minCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput"></a>

```java
public java.lang.Number getMinCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osDiskSizeGbInput`<sup>Optional</sup> <a name="osDiskSizeGbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput"></a>

```java
public java.lang.Number getOsDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `osDiskTypeInput`<sup>Optional</sup> <a name="osDiskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput"></a>

```java
public java.lang.String getOsDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `osSkuInput`<sup>Optional</sup> <a name="osSkuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSkuInput"></a>

```java
public java.lang.String getOsSkuInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `podSubnetIdsInput`<sup>Optional</sup> <a name="podSubnetIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getPodSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.schedulingInput"></a>

```java
public OceanAksNpScheduling getSchedulingInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput"></a>

```java
public java.lang.Number getSpotPercentageInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput"></a>

```java
public java.lang.Object getTaintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>>

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicyInput"></a>

```java
public OceanAksNpUpdatePolicy getUpdatePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---

##### `vnetSubnetIdsInput`<sup>Optional</sup> <a name="vnetSubnetIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getVnetSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aksClusterName`<sup>Required</sup> <a name="aksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName"></a>

```java
public java.lang.String getAksClusterName();
```

- *Type:* java.lang.String

---

##### `aksInfrastructureResourceGroupName`<sup>Required</sup> <a name="aksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName"></a>

```java
public java.lang.String getAksInfrastructureResourceGroupName();
```

- *Type:* java.lang.String

---

##### `aksRegion`<sup>Required</sup> <a name="aksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion"></a>

```java
public java.lang.String getAksRegion();
```

- *Type:* java.lang.String

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName"></a>

```java
public java.lang.String getAksResourceGroupName();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `controllerClusterId`<sup>Required</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId"></a>

```java
public java.lang.String getControllerClusterId();
```

- *Type:* java.lang.String

---

##### `enableNodePublicIp`<sup>Required</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp"></a>

```java
public java.lang.Object getEnableNodePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osDiskSizeGb`<sup>Required</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb"></a>

```java
public java.lang.Number getOsDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `osDiskType`<sup>Required</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType"></a>

```java
public java.lang.String getOsDiskType();
```

- *Type:* java.lang.String

---

##### `osSku`<sup>Required</sup> <a name="osSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSku"></a>

```java
public java.lang.String getOsSku();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `podSubnetIds`<sup>Required</sup> <a name="podSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIds"></a>

```java
public java.util.List<java.lang.String> getPodSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vnetSubnetIds`<sup>Required</sup> <a name="vnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVnetSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksNpAutoscaler <a name="OceanAksNpAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscaler;

OceanAksNpAutoscaler.builder()
//  .autoscaleDown(OceanAksNpAutoscalerAutoscaleDown)
//  .autoscaleHeadroom(OceanAksNpAutoscalerAutoscaleHeadroom)
//  .autoscaleIsEnabled(java.lang.Boolean)
//  .autoscaleIsEnabled(IResolvable)
//  .resourceLimits(OceanAksNpAutoscalerResourceLimits)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown"></a>

```java
public OceanAksNpAutoscalerAutoscaleDown getAutoscaleDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#autoscale_down OceanAksNp#autoscale_down}

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroom getAutoscaleHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#autoscale_headroom OceanAksNp#autoscale_headroom}

---

##### `autoscaleIsEnabled`<sup>Optional</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled"></a>

```java
public java.lang.Object getAutoscaleIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits"></a>

```java
public OceanAksNpAutoscalerResourceLimits getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#resource_limits OceanAksNp#resource_limits}

---

### OceanAksNpAutoscalerAutoscaleDown <a name="OceanAksNpAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerAutoscaleDown;

OceanAksNpAutoscalerAutoscaleDown.builder()
//  .maxScaleDownPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}. |

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}.

---

### OceanAksNpAutoscalerAutoscaleHeadroom <a name="OceanAksNpAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerAutoscaleHeadroom;

OceanAksNpAutoscalerAutoscaleHeadroom.builder()
//  .automatic(OceanAksNpAutoscalerAutoscaleHeadroomAutomatic)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | automatic block. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroomAutomatic getAutomatic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#automatic OceanAksNp#automatic}

---

### OceanAksNpAutoscalerAutoscaleHeadroomAutomatic <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic;

OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.builder()
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}.

---

### OceanAksNpAutoscalerResourceLimits <a name="OceanAksNpAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerResourceLimits;

OceanAksNpAutoscalerResourceLimits.builder()
//  .maxMemoryGib(java.lang.Number)
//  .maxVcpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

### OceanAksNpConfig <a name="OceanAksNpConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpConfig;

OceanAksNpConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .aksClusterName(java.lang.String)
    .aksInfrastructureResourceGroupName(java.lang.String)
    .aksRegion(java.lang.String)
    .aksResourceGroupName(java.lang.String)
    .availabilityZones(java.util.List<java.lang.String>)
    .controllerClusterId(java.lang.String)
    .name(java.lang.String)
//  .autoscaler(OceanAksNpAutoscaler)
//  .enableNodePublicIp(java.lang.Boolean)
//  .enableNodePublicIp(IResolvable)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .filters(OceanAksNpFilters)
//  .headrooms(IResolvable)
//  .headrooms(java.util.List<OceanAksNpHeadrooms>)
//  .health(OceanAksNpHealth)
//  .id(java.lang.String)
//  .kubernetesVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .linuxOsConfig(IResolvable)
//  .linuxOsConfig(java.util.List<OceanAksNpLinuxOsConfig>)
//  .maxCount(java.lang.Number)
//  .maxPodsPerNode(java.lang.Number)
//  .minCount(java.lang.Number)
//  .osDiskSizeGb(java.lang.Number)
//  .osDiskType(java.lang.String)
//  .osSku(java.lang.String)
//  .osType(java.lang.String)
//  .podSubnetIds(java.util.List<java.lang.String>)
//  .scheduling(OceanAksNpScheduling)
//  .spotPercentage(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<OceanAksNpTaints>)
//  .updatePolicy(OceanAksNpUpdatePolicy)
//  .vnetSubnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName">aksClusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName">aksInfrastructureResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion">aksRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName">aksResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#name OceanAksNp#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp">enableNodePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.headrooms">headrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>></code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#id OceanAksNp#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.linuxOsConfig">linuxOsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osSku">osSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.podSubnetIds">podSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>></code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vnetSubnetIds">vnetSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aksClusterName`<sup>Required</sup> <a name="aksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName"></a>

```java
public java.lang.String getAksClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}.

---

##### `aksInfrastructureResourceGroupName`<sup>Required</sup> <a name="aksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName"></a>

```java
public java.lang.String getAksInfrastructureResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}.

---

##### `aksRegion`<sup>Required</sup> <a name="aksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion"></a>

```java
public java.lang.String getAksRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}.

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName"></a>

```java
public java.lang.String getAksResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}.

---

##### `controllerClusterId`<sup>Required</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId"></a>

```java
public java.lang.String getControllerClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#name OceanAksNp#name}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler"></a>

```java
public OceanAksNpAutoscaler getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#autoscaler OceanAksNp#autoscaler}

---

##### `enableNodePublicIp`<sup>Optional</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp"></a>

```java
public java.lang.Object getEnableNodePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.filters"></a>

```java
public OceanAksNpFilters getFilters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#filters OceanAksNp#filters}

---

##### `headrooms`<sup>Optional</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.headrooms"></a>

```java
public java.lang.Object getHeadrooms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>>

headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#headrooms OceanAksNp#headrooms}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health"></a>

```java
public OceanAksNpHealth getHealth();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#health OceanAksNp#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#id OceanAksNp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesVersion`<sup>Optional</sup> <a name="kubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}.

---

##### `linuxOsConfig`<sup>Optional</sup> <a name="linuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.linuxOsConfig"></a>

```java
public java.lang.Object getLinuxOsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#linux_os_config OceanAksNp#linux_os_config}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}.

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}.

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}.

---

##### `osDiskSizeGb`<sup>Optional</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb"></a>

```java
public java.lang.Number getOsDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}.

---

##### `osDiskType`<sup>Optional</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType"></a>

```java
public java.lang.String getOsDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}.

---

##### `osSku`<sup>Optional</sup> <a name="osSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osSku"></a>

```java
public java.lang.String getOsSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}.

---

##### `podSubnetIds`<sup>Optional</sup> <a name="podSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.podSubnetIds"></a>

```java
public java.util.List<java.lang.String> getPodSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}.

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.scheduling"></a>

```java
public OceanAksNpScheduling getScheduling();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#scheduling OceanAksNp#scheduling}

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints"></a>

```java
public java.lang.Object getTaints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#taints OceanAksNp#taints}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.updatePolicy"></a>

```java
public OceanAksNpUpdatePolicy getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#update_policy OceanAksNp#update_policy}

---

##### `vnetSubnetIds`<sup>Optional</sup> <a name="vnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vnetSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVnetSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}.

---

### OceanAksNpFilters <a name="OceanAksNpFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpFilters;

OceanAksNpFilters.builder()
//  .acceleratedNetworking(java.lang.String)
//  .architectures(java.util.List<java.lang.String>)
//  .diskPerformance(java.lang.String)
//  .excludeSeries(java.util.List<java.lang.String>)
//  .gpuTypes(java.util.List<java.lang.String>)
//  .maxGpu(java.lang.Number)
//  .maxMemoryGib(java.lang.Number)
//  .maxVcpu(java.lang.Number)
//  .minDisk(java.lang.Number)
//  .minGpu(java.lang.Number)
//  .minMemoryGib(java.lang.Number)
//  .minNics(java.lang.Number)
//  .minVcpu(java.lang.Number)
//  .series(java.util.List<java.lang.String>)
//  .vmTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.acceleratedNetworking">acceleratedNetworking</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#accelerated_networking OceanAksNp#accelerated_networking}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#architectures OceanAksNp#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.diskPerformance">diskPerformance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#disk_performance OceanAksNp#disk_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.excludeSeries">excludeSeries</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#exclude_series OceanAksNp#exclude_series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.gpuTypes">gpuTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#gpu_types OceanAksNp#gpu_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxGpu">maxGpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_gpu OceanAksNp#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minDisk">minDisk</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_disk OceanAksNp#min_disk}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minGpu">minGpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_gpu OceanAksNp#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minMemoryGib">minMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_memory_gib OceanAksNp#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minNics">minNics</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_nics OceanAksNp#min_nics}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minVcpu">minVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_vcpu OceanAksNp#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.series">series</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#series OceanAksNp#series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.vmTypes">vmTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vm_types OceanAksNp#vm_types}. |

---

##### `acceleratedNetworking`<sup>Optional</sup> <a name="acceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.acceleratedNetworking"></a>

```java
public java.lang.String getAcceleratedNetworking();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#accelerated_networking OceanAksNp#accelerated_networking}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#architectures OceanAksNp#architectures}.

---

##### `diskPerformance`<sup>Optional</sup> <a name="diskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.diskPerformance"></a>

```java
public java.lang.String getDiskPerformance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#disk_performance OceanAksNp#disk_performance}.

---

##### `excludeSeries`<sup>Optional</sup> <a name="excludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.excludeSeries"></a>

```java
public java.util.List<java.lang.String> getExcludeSeries();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#exclude_series OceanAksNp#exclude_series}.

---

##### `gpuTypes`<sup>Optional</sup> <a name="gpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.gpuTypes"></a>

```java
public java.util.List<java.lang.String> getGpuTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#gpu_types OceanAksNp#gpu_types}.

---

##### `maxGpu`<sup>Optional</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxGpu"></a>

```java
public java.lang.Number getMaxGpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_gpu OceanAksNp#max_gpu}.

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

##### `minDisk`<sup>Optional</sup> <a name="minDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minDisk"></a>

```java
public java.lang.Number getMinDisk();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_disk OceanAksNp#min_disk}.

---

##### `minGpu`<sup>Optional</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minGpu"></a>

```java
public java.lang.Number getMinGpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_gpu OceanAksNp#min_gpu}.

---

##### `minMemoryGib`<sup>Optional</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minMemoryGib"></a>

```java
public java.lang.Number getMinMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_memory_gib OceanAksNp#min_memory_gib}.

---

##### `minNics`<sup>Optional</sup> <a name="minNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minNics"></a>

```java
public java.lang.Number getMinNics();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_nics OceanAksNp#min_nics}.

---

##### `minVcpu`<sup>Optional</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minVcpu"></a>

```java
public java.lang.Number getMinVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#min_vcpu OceanAksNp#min_vcpu}.

---

##### `series`<sup>Optional</sup> <a name="series" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.series"></a>

```java
public java.util.List<java.lang.String> getSeries();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#series OceanAksNp#series}.

---

##### `vmTypes`<sup>Optional</sup> <a name="vmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.vmTypes"></a>

```java
public java.util.List<java.lang.String> getVmTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vm_types OceanAksNp#vm_types}.

---

### OceanAksNpHeadrooms <a name="OceanAksNpHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpHeadrooms;

OceanAksNpHeadrooms.builder()
//  .cpuPerUnit(java.lang.Number)
//  .gpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
//  .numOfUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#cpu_per_unit OceanAksNp#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#gpu_per_unit OceanAksNp#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#memory_per_unit OceanAksNp#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#num_of_units OceanAksNp#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#cpu_per_unit OceanAksNp#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#gpu_per_unit OceanAksNp#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#memory_per_unit OceanAksNp#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#num_of_units OceanAksNp#num_of_units}.

---

### OceanAksNpHealth <a name="OceanAksNpHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpHealth;

OceanAksNpHealth.builder()
//  .gracePeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}. |

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}.

---

### OceanAksNpLinuxOsConfig <a name="OceanAksNpLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpLinuxOsConfig;

OceanAksNpLinuxOsConfig.builder()
//  .sysctls(IResolvable)
//  .sysctls(java.util.List<OceanAksNpLinuxOsConfigSysctls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.property.sysctls">sysctls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>></code> | sysctls block. |

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.property.sysctls"></a>

```java
public java.lang.Object getSysctls();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>>

sysctls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#sysctls OceanAksNp#sysctls}

---

### OceanAksNpLinuxOsConfigSysctls <a name="OceanAksNpLinuxOsConfigSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpLinuxOsConfigSysctls;

OceanAksNpLinuxOsConfigSysctls.builder()
//  .vmMaxMapCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.property.vmMaxMapCount">vmMaxMapCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vm_max_map_count OceanAksNp#vm_max_map_count}. |

---

##### `vmMaxMapCount`<sup>Optional</sup> <a name="vmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.property.vmMaxMapCount"></a>

```java
public java.lang.Number getVmMaxMapCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vm_max_map_count OceanAksNp#vm_max_map_count}.

---

### OceanAksNpScheduling <a name="OceanAksNpScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpScheduling;

OceanAksNpScheduling.builder()
//  .shutdownHours(OceanAksNpSchedulingShutdownHours)
//  .tasks(IResolvable)
//  .tasks(java.util.List<OceanAksNpSchedulingTasks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.tasks">tasks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>></code> | tasks block. |

---

##### `shutdownHours`<sup>Optional</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.shutdownHours"></a>

```java
public OceanAksNpSchedulingShutdownHours getShutdownHours();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#shutdown_hours OceanAksNp#shutdown_hours}

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.tasks"></a>

```java
public java.lang.Object getTasks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#tasks OceanAksNp#tasks}

---

### OceanAksNpSchedulingShutdownHours <a name="OceanAksNpSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingShutdownHours;

OceanAksNpSchedulingShutdownHours.builder()
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .timeWindows(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `timeWindows`<sup>Optional</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}.

---

### OceanAksNpSchedulingTasks <a name="OceanAksNpSchedulingTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingTasks;

OceanAksNpSchedulingTasks.builder()
    .cronExpression(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .taskType(java.lang.String)
//  .parameters(OceanAksNpSchedulingTasksParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#cron_expression OceanAksNp#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#task_type OceanAksNp#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | parameters block. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#cron_expression OceanAksNp#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#task_type OceanAksNp#task_type}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.parameters"></a>

```java
public OceanAksNpSchedulingTasksParameters getParameters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#parameters OceanAksNp#parameters}

---

### OceanAksNpSchedulingTasksParameters <a name="OceanAksNpSchedulingTasksParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingTasksParameters;

OceanAksNpSchedulingTasksParameters.builder()
//  .parametersClusterRoll(OceanAksNpSchedulingTasksParametersParametersClusterRoll)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersClusterRoll">parametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | parameters_cluster_roll block. |

---

##### `parametersClusterRoll`<sup>Optional</sup> <a name="parametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersClusterRoll"></a>

```java
public OceanAksNpSchedulingTasksParametersParametersClusterRoll getParametersClusterRoll();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

parameters_cluster_roll block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#parameters_cluster_roll OceanAksNp#parameters_cluster_roll}

---

### OceanAksNpSchedulingTasksParametersParametersClusterRoll <a name="OceanAksNpSchedulingTasksParametersParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingTasksParametersParametersClusterRoll;

OceanAksNpSchedulingTasksParametersParametersClusterRoll.builder()
//  .batchMinHealthyPercentage(java.lang.Number)
//  .batchSizePercentage(java.lang.Number)
//  .comment(java.lang.String)
//  .respectPdb(java.lang.Boolean)
//  .respectPdb(IResolvable)
//  .respectRestrictScaleDown(java.lang.Boolean)
//  .respectRestrictScaleDown(IResolvable)
//  .vngIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectRestrictScaleDown">respectRestrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.vngIds">vngIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}. |

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}.

---

##### `batchSizePercentage`<sup>Optional</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}.

---

##### `respectRestrictScaleDown`<sup>Optional</sup> <a name="respectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectRestrictScaleDown"></a>

```java
public java.lang.Object getRespectRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}.

---

##### `vngIds`<sup>Optional</sup> <a name="vngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.vngIds"></a>

```java
public java.util.List<java.lang.String> getVngIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}.

---

### OceanAksNpTaints <a name="OceanAksNpTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpTaints;

OceanAksNpTaints.builder()
    .effect(java.lang.String)
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#effect OceanAksNp#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#key OceanAksNp#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#value OceanAksNp#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#effect OceanAksNp#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#key OceanAksNp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#value OceanAksNp#value}.

---

### OceanAksNpUpdatePolicy <a name="OceanAksNpUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpUpdatePolicy;

OceanAksNpUpdatePolicy.builder()
    .shouldRoll(java.lang.Boolean)
    .shouldRoll(IResolvable)
//  .conditionedRoll(java.lang.Boolean)
//  .conditionedRoll(IResolvable)
//  .rollConfig(OceanAksNpUpdatePolicyRollConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#should_roll OceanAksNp#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.conditionedRoll">conditionedRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#conditioned_roll OceanAksNp#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#should_roll OceanAksNp#should_roll}.

---

##### `conditionedRoll`<sup>Optional</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.conditionedRoll"></a>

```java
public java.lang.Object getConditionedRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#conditioned_roll OceanAksNp#conditioned_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.rollConfig"></a>

```java
public OceanAksNpUpdatePolicyRollConfig getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#roll_config OceanAksNp#roll_config}

---

### OceanAksNpUpdatePolicyRollConfig <a name="OceanAksNpUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpUpdatePolicyRollConfig;

OceanAksNpUpdatePolicyRollConfig.builder()
//  .batchMinHealthyPercentage(java.lang.Number)
//  .batchSizePercentage(java.lang.Number)
//  .comment(java.lang.String)
//  .nodeNames(java.util.List<java.lang.String>)
//  .nodePoolNames(java.util.List<java.lang.String>)
//  .respectPdb(java.lang.Boolean)
//  .respectPdb(IResolvable)
//  .respectRestrictScaleDown(java.lang.Boolean)
//  .respectRestrictScaleDown(IResolvable)
//  .vngIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodeNames">nodeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#node_names OceanAksNp#node_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodePoolNames">nodePoolNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#node_pool_names OceanAksNp#node_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectRestrictScaleDown">respectRestrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.vngIds">vngIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}. |

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}.

---

##### `batchSizePercentage`<sup>Optional</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}.

---

##### `nodeNames`<sup>Optional</sup> <a name="nodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodeNames"></a>

```java
public java.util.List<java.lang.String> getNodeNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#node_names OceanAksNp#node_names}.

---

##### `nodePoolNames`<sup>Optional</sup> <a name="nodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodePoolNames"></a>

```java
public java.util.List<java.lang.String> getNodePoolNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#node_pool_names OceanAksNp#node_pool_names}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}.

---

##### `respectRestrictScaleDown`<sup>Optional</sup> <a name="respectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectRestrictScaleDown"></a>

```java
public java.lang.Object getRespectRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}.

---

##### `vngIds`<sup>Optional</sup> <a name="vngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.vngIds"></a>

```java
public java.util.List<java.lang.String> getVngIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.181.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksNpAutoscalerAutoscaleDownOutputReference <a name="OceanAksNpAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerAutoscaleDownOutputReference;

new OceanAksNpAutoscalerAutoscaleDownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```java
public void resetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```java
public java.lang.Number getMaxScaleDownPercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```java
public OceanAksNpAutoscalerAutoscaleDown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference;

new OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroomAutomatic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference;

new OceanAksNpAutoscalerAutoscaleHeadroomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic">putAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomatic` <a name="putAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic"></a>

```java
public void putAutomatic(OceanAksNpAutoscalerAutoscaleHeadroomAutomatic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic"></a>

```java
public void resetAutomatic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput">automaticInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference getAutomatic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroomAutomatic getAutomaticInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---


### OceanAksNpAutoscalerOutputReference <a name="OceanAksNpAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerOutputReference;

new OceanAksNpAutoscalerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled">resetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown"></a>

```java
public void putAutoscaleDown(OceanAksNpAutoscalerAutoscaleDown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```java
public void putAutoscaleHeadroom(OceanAksNpAutoscalerAutoscaleHeadroom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits"></a>

```java
public void putResourceLimits(OceanAksNpAutoscalerResourceLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown"></a>

```java
public void resetAutoscaleDown()
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```java
public void resetAutoscaleHeadroom()
```

##### `resetAutoscaleIsEnabled` <a name="resetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```java
public void resetAutoscaleIsEnabled()
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits"></a>

```java
public void resetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput">autoscaleIsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown"></a>

```java
public OceanAksNpAutoscalerAutoscaleDownOutputReference getAutoscaleDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a>

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroomOutputReference getAutoscaleHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits"></a>

```java
public OceanAksNpAutoscalerResourceLimitsOutputReference getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a>

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput"></a>

```java
public OceanAksNpAutoscalerAutoscaleDown getAutoscaleDownInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```java
public OceanAksNpAutoscalerAutoscaleHeadroom getAutoscaleHeadroomInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `autoscaleIsEnabledInput`<sup>Optional</sup> <a name="autoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```java
public java.lang.Object getAutoscaleIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput"></a>

```java
public OceanAksNpAutoscalerResourceLimits getResourceLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `autoscaleIsEnabled`<sup>Required</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```java
public java.lang.Object getAutoscaleIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue"></a>

```java
public OceanAksNpAutoscaler getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---


### OceanAksNpAutoscalerResourceLimitsOutputReference <a name="OceanAksNpAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpAutoscalerResourceLimitsOutputReference;

new OceanAksNpAutoscalerResourceLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```java
public void resetMaxMemoryGib()
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```java
public void resetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```java
public java.lang.Number getMaxMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```java
public java.lang.Number getMaxVcpuInput();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```java
public OceanAksNpAutoscalerResourceLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---


### OceanAksNpFiltersOutputReference <a name="OceanAksNpFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpFiltersOutputReference;

new OceanAksNpFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetAcceleratedNetworking">resetAcceleratedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetDiskPerformance">resetDiskPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetExcludeSeries">resetExcludeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetGpuTypes">resetGpuTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxGpu">resetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinDisk">resetMinDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinGpu">resetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinMemoryGib">resetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinNics">resetMinNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinVcpu">resetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetSeries">resetSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetVmTypes">resetVmTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratedNetworking` <a name="resetAcceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetAcceleratedNetworking"></a>

```java
public void resetAcceleratedNetworking()
```

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetArchitectures"></a>

```java
public void resetArchitectures()
```

##### `resetDiskPerformance` <a name="resetDiskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetDiskPerformance"></a>

```java
public void resetDiskPerformance()
```

##### `resetExcludeSeries` <a name="resetExcludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetExcludeSeries"></a>

```java
public void resetExcludeSeries()
```

##### `resetGpuTypes` <a name="resetGpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetGpuTypes"></a>

```java
public void resetGpuTypes()
```

##### `resetMaxGpu` <a name="resetMaxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxGpu"></a>

```java
public void resetMaxGpu()
```

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxMemoryGib"></a>

```java
public void resetMaxMemoryGib()
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxVcpu"></a>

```java
public void resetMaxVcpu()
```

##### `resetMinDisk` <a name="resetMinDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinDisk"></a>

```java
public void resetMinDisk()
```

##### `resetMinGpu` <a name="resetMinGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinGpu"></a>

```java
public void resetMinGpu()
```

##### `resetMinMemoryGib` <a name="resetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinMemoryGib"></a>

```java
public void resetMinMemoryGib()
```

##### `resetMinNics` <a name="resetMinNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinNics"></a>

```java
public void resetMinNics()
```

##### `resetMinVcpu` <a name="resetMinVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinVcpu"></a>

```java
public void resetMinVcpu()
```

##### `resetSeries` <a name="resetSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetSeries"></a>

```java
public void resetSeries()
```

##### `resetVmTypes` <a name="resetVmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetVmTypes"></a>

```java
public void resetVmTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworkingInput">acceleratedNetworkingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformanceInput">diskPerformanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeriesInput">excludeSeriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypesInput">gpuTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpuInput">maxGpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDiskInput">minDiskInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpuInput">minGpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGibInput">minMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNicsInput">minNicsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpuInput">minVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.seriesInput">seriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypesInput">vmTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworking">acceleratedNetworking</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformance">diskPerformance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeries">excludeSeries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypes">gpuTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpu">maxGpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDisk">minDisk</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpu">minGpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGib">minMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNics">minNics</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpu">minVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.series">series</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypes">vmTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratedNetworkingInput`<sup>Optional</sup> <a name="acceleratedNetworkingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworkingInput"></a>

```java
public java.lang.String getAcceleratedNetworkingInput();
```

- *Type:* java.lang.String

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architecturesInput"></a>

```java
public java.util.List<java.lang.String> getArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `diskPerformanceInput`<sup>Optional</sup> <a name="diskPerformanceInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformanceInput"></a>

```java
public java.lang.String getDiskPerformanceInput();
```

- *Type:* java.lang.String

---

##### `excludeSeriesInput`<sup>Optional</sup> <a name="excludeSeriesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeriesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeSeriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gpuTypesInput`<sup>Optional</sup> <a name="gpuTypesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypesInput"></a>

```java
public java.util.List<java.lang.String> getGpuTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxGpuInput`<sup>Optional</sup> <a name="maxGpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpuInput"></a>

```java
public java.lang.Number getMaxGpuInput();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGibInput"></a>

```java
public java.lang.Number getMaxMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpuInput"></a>

```java
public java.lang.Number getMaxVcpuInput();
```

- *Type:* java.lang.Number

---

##### `minDiskInput`<sup>Optional</sup> <a name="minDiskInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDiskInput"></a>

```java
public java.lang.Number getMinDiskInput();
```

- *Type:* java.lang.Number

---

##### `minGpuInput`<sup>Optional</sup> <a name="minGpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpuInput"></a>

```java
public java.lang.Number getMinGpuInput();
```

- *Type:* java.lang.Number

---

##### `minMemoryGibInput`<sup>Optional</sup> <a name="minMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGibInput"></a>

```java
public java.lang.Number getMinMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `minNicsInput`<sup>Optional</sup> <a name="minNicsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNicsInput"></a>

```java
public java.lang.Number getMinNicsInput();
```

- *Type:* java.lang.Number

---

##### `minVcpuInput`<sup>Optional</sup> <a name="minVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpuInput"></a>

```java
public java.lang.Number getMinVcpuInput();
```

- *Type:* java.lang.Number

---

##### `seriesInput`<sup>Optional</sup> <a name="seriesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.seriesInput"></a>

```java
public java.util.List<java.lang.String> getSeriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vmTypesInput`<sup>Optional</sup> <a name="vmTypesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypesInput"></a>

```java
public java.util.List<java.lang.String> getVmTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratedNetworking`<sup>Required</sup> <a name="acceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworking"></a>

```java
public java.lang.String getAcceleratedNetworking();
```

- *Type:* java.lang.String

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `diskPerformance`<sup>Required</sup> <a name="diskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformance"></a>

```java
public java.lang.String getDiskPerformance();
```

- *Type:* java.lang.String

---

##### `excludeSeries`<sup>Required</sup> <a name="excludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeries"></a>

```java
public java.util.List<java.lang.String> getExcludeSeries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gpuTypes`<sup>Required</sup> <a name="gpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypes"></a>

```java
public java.util.List<java.lang.String> getGpuTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxGpu`<sup>Required</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpu"></a>

```java
public java.lang.Number getMaxGpu();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

---

##### `minDisk`<sup>Required</sup> <a name="minDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDisk"></a>

```java
public java.lang.Number getMinDisk();
```

- *Type:* java.lang.Number

---

##### `minGpu`<sup>Required</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpu"></a>

```java
public java.lang.Number getMinGpu();
```

- *Type:* java.lang.Number

---

##### `minMemoryGib`<sup>Required</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGib"></a>

```java
public java.lang.Number getMinMemoryGib();
```

- *Type:* java.lang.Number

---

##### `minNics`<sup>Required</sup> <a name="minNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNics"></a>

```java
public java.lang.Number getMinNics();
```

- *Type:* java.lang.Number

---

##### `minVcpu`<sup>Required</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpu"></a>

```java
public java.lang.Number getMinVcpu();
```

- *Type:* java.lang.Number

---

##### `series`<sup>Required</sup> <a name="series" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.series"></a>

```java
public java.util.List<java.lang.String> getSeries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vmTypes`<sup>Required</sup> <a name="vmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypes"></a>

```java
public java.util.List<java.lang.String> getVmTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.internalValue"></a>

```java
public OceanAksNpFilters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---


### OceanAksNpHeadroomsList <a name="OceanAksNpHeadroomsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpHeadroomsList;

new OceanAksNpHeadroomsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get"></a>

```java
public OceanAksNpHeadroomsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>>

---


### OceanAksNpHeadroomsOutputReference <a name="OceanAksNpHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpHeadroomsOutputReference;

new OceanAksNpHeadroomsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetGpuPerUnit"></a>

```java
public void resetGpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetNumOfUnits"></a>

```java
public void resetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```java
public java.lang.Number getGpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms">OceanAksNpHeadrooms</a>

---


### OceanAksNpHealthOutputReference <a name="OceanAksNpHealthOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpHealthOutputReference;

new OceanAksNpHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod"></a>

```java
public void resetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput"></a>

```java
public java.lang.Number getGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue"></a>

```java
public OceanAksNpHealth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---


### OceanAksNpLinuxOsConfigList <a name="OceanAksNpLinuxOsConfigList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpLinuxOsConfigList;

new OceanAksNpLinuxOsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get"></a>

```java
public OceanAksNpLinuxOsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>>

---


### OceanAksNpLinuxOsConfigOutputReference <a name="OceanAksNpLinuxOsConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpLinuxOsConfigOutputReference;

new OceanAksNpLinuxOsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls">putSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resetSysctls">resetSysctls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSysctls` <a name="putSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls"></a>

```java
public void putSysctls(IResolvable OR java.util.List<OceanAksNpLinuxOsConfigSysctls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>>

---

##### `resetSysctls` <a name="resetSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resetSysctls"></a>

```java
public void resetSysctls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctls">sysctls</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList">OceanAksNpLinuxOsConfigSysctlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctlsInput">sysctlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctls"></a>

```java
public OceanAksNpLinuxOsConfigSysctlsList getSysctls();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList">OceanAksNpLinuxOsConfigSysctlsList</a>

---

##### `sysctlsInput`<sup>Optional</sup> <a name="sysctlsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctlsInput"></a>

```java
public java.lang.Object getSysctlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig">OceanAksNpLinuxOsConfig</a>

---


### OceanAksNpLinuxOsConfigSysctlsList <a name="OceanAksNpLinuxOsConfigSysctlsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpLinuxOsConfigSysctlsList;

new OceanAksNpLinuxOsConfigSysctlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get"></a>

```java
public OceanAksNpLinuxOsConfigSysctlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>>

---


### OceanAksNpLinuxOsConfigSysctlsOutputReference <a name="OceanAksNpLinuxOsConfigSysctlsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpLinuxOsConfigSysctlsOutputReference;

new OceanAksNpLinuxOsConfigSysctlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount">resetVmMaxMapCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVmMaxMapCount` <a name="resetVmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount"></a>

```java
public void resetVmMaxMapCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput">vmMaxMapCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount">vmMaxMapCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vmMaxMapCountInput`<sup>Optional</sup> <a name="vmMaxMapCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput"></a>

```java
public java.lang.Number getVmMaxMapCountInput();
```

- *Type:* java.lang.Number

---

##### `vmMaxMapCount`<sup>Required</sup> <a name="vmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount"></a>

```java
public java.lang.Number getVmMaxMapCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls">OceanAksNpLinuxOsConfigSysctls</a>

---


### OceanAksNpSchedulingOutputReference <a name="OceanAksNpSchedulingOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingOutputReference;

new OceanAksNpSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours">putShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetShutdownHours">resetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetTasks">resetTasks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShutdownHours` <a name="putShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours"></a>

```java
public void putShutdownHours(OceanAksNpSchedulingShutdownHours value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---

##### `putTasks` <a name="putTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks"></a>

```java
public void putTasks(IResolvable OR java.util.List<OceanAksNpSchedulingTasks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>>

---

##### `resetShutdownHours` <a name="resetShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetShutdownHours"></a>

```java
public void resetShutdownHours()
```

##### `resetTasks` <a name="resetTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetTasks"></a>

```java
public void resetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference">OceanAksNpSchedulingShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList">OceanAksNpSchedulingTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHoursInput">shutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasksInput">tasksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shutdownHours`<sup>Required</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHours"></a>

```java
public OceanAksNpSchedulingShutdownHoursOutputReference getShutdownHours();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference">OceanAksNpSchedulingShutdownHoursOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasks"></a>

```java
public OceanAksNpSchedulingTasksList getTasks();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList">OceanAksNpSchedulingTasksList</a>

---

##### `shutdownHoursInput`<sup>Optional</sup> <a name="shutdownHoursInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHoursInput"></a>

```java
public OceanAksNpSchedulingShutdownHours getShutdownHoursInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasksInput"></a>

```java
public java.lang.Object getTasksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.internalValue"></a>

```java
public OceanAksNpScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---


### OceanAksNpSchedulingShutdownHoursOutputReference <a name="OceanAksNpSchedulingShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingShutdownHoursOutputReference;

new OceanAksNpSchedulingShutdownHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetTimeWindows">resetTimeWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetTimeWindows` <a name="resetTimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetTimeWindows"></a>

```java
public void resetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindowsInput"></a>

```java
public java.util.List<java.lang.String> getTimeWindowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.internalValue"></a>

```java
public OceanAksNpSchedulingShutdownHours getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---


### OceanAksNpSchedulingTasksList <a name="OceanAksNpSchedulingTasksList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingTasksList;

new OceanAksNpSchedulingTasksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get"></a>

```java
public OceanAksNpSchedulingTasksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>>

---


### OceanAksNpSchedulingTasksOutputReference <a name="OceanAksNpSchedulingTasksOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingTasksOutputReference;

new OceanAksNpSchedulingTasksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters"></a>

```java
public void putParameters(OceanAksNpSchedulingTasksParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference">OceanAksNpSchedulingTasksParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parameters"></a>

```java
public OceanAksNpSchedulingTasksParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference">OceanAksNpSchedulingTasksParametersOutputReference</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parametersInput"></a>

```java
public OceanAksNpSchedulingTasksParameters getParametersInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks">OceanAksNpSchedulingTasks</a>

---


### OceanAksNpSchedulingTasksParametersOutputReference <a name="OceanAksNpSchedulingTasksParametersOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingTasksParametersOutputReference;

new OceanAksNpSchedulingTasksParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll">putParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersClusterRoll">resetParametersClusterRoll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParametersClusterRoll` <a name="putParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll"></a>

```java
public void putParametersClusterRoll(OceanAksNpSchedulingTasksParametersParametersClusterRoll value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---

##### `resetParametersClusterRoll` <a name="resetParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersClusterRoll"></a>

```java
public void resetParametersClusterRoll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRoll">parametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference">OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRollInput">parametersClusterRollInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parametersClusterRoll`<sup>Required</sup> <a name="parametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRoll"></a>

```java
public OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference getParametersClusterRoll();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference">OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference</a>

---

##### `parametersClusterRollInput`<sup>Optional</sup> <a name="parametersClusterRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRollInput"></a>

```java
public OceanAksNpSchedulingTasksParametersParametersClusterRoll getParametersClusterRollInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.internalValue"></a>

```java
public OceanAksNpSchedulingTasksParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---


### OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference <a name="OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference;

new OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage">resetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectRestrictScaleDown">resetRespectRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetVngIds">resetVngIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage"></a>

```java
public void resetBatchMinHealthyPercentage()
```

##### `resetBatchSizePercentage` <a name="resetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage"></a>

```java
public void resetBatchSizePercentage()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectPdb"></a>

```java
public void resetRespectPdb()
```

##### `resetRespectRestrictScaleDown` <a name="resetRespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectRestrictScaleDown"></a>

```java
public void resetRespectRestrictScaleDown()
```

##### `resetVngIds` <a name="resetVngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetVngIds"></a>

```java
public void resetVngIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDownInput">respectRestrictScaleDownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIdsInput">vngIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDown">respectRestrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIds">vngIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput"></a>

```java
public java.lang.Number getBatchMinHealthyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.Number getBatchSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdbInput"></a>

```java
public java.lang.Object getRespectPdbInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `respectRestrictScaleDownInput`<sup>Optional</sup> <a name="respectRestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDownInput"></a>

```java
public java.lang.Object getRespectRestrictScaleDownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vngIdsInput`<sup>Optional</sup> <a name="vngIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIdsInput"></a>

```java
public java.util.List<java.lang.String> getVngIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `respectRestrictScaleDown`<sup>Required</sup> <a name="respectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDown"></a>

```java
public java.lang.Object getRespectRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vngIds`<sup>Required</sup> <a name="vngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIds"></a>

```java
public java.util.List<java.lang.String> getVngIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.internalValue"></a>

```java
public OceanAksNpSchedulingTasksParametersParametersClusterRoll getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---


### OceanAksNpTaintsList <a name="OceanAksNpTaintsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpTaintsList;

new OceanAksNpTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get"></a>

```java
public OceanAksNpTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>>

---


### OceanAksNpTaintsOutputReference <a name="OceanAksNpTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpTaintsOutputReference;

new OceanAksNpTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>

---


### OceanAksNpUpdatePolicyOutputReference <a name="OceanAksNpUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpUpdatePolicyOutputReference;

new OceanAksNpUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetConditionedRoll">resetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig"></a>

```java
public void putRollConfig(OceanAksNpUpdatePolicyRollConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---

##### `resetConditionedRoll` <a name="resetConditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetConditionedRoll"></a>

```java
public void resetConditionedRoll()
```

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetRollConfig"></a>

```java
public void resetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference">OceanAksNpUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRollInput">conditionedRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRoll">conditionedRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfig"></a>

```java
public OceanAksNpUpdatePolicyRollConfigOutputReference getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference">OceanAksNpUpdatePolicyRollConfigOutputReference</a>

---

##### `conditionedRollInput`<sup>Optional</sup> <a name="conditionedRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```java
public java.lang.Object getConditionedRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfigInput"></a>

```java
public OceanAksNpUpdatePolicyRollConfig getRollConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRollInput"></a>

```java
public java.lang.Object getShouldRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `conditionedRoll`<sup>Required</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRoll"></a>

```java
public java.lang.Object getConditionedRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.internalValue"></a>

```java
public OceanAksNpUpdatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---


### OceanAksNpUpdatePolicyRollConfigOutputReference <a name="OceanAksNpUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np.OceanAksNpUpdatePolicyRollConfigOutputReference;

new OceanAksNpUpdatePolicyRollConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage">resetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodeNames">resetNodeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodePoolNames">resetNodePoolNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown">resetRespectRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetVngIds">resetVngIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```java
public void resetBatchMinHealthyPercentage()
```

##### `resetBatchSizePercentage` <a name="resetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage"></a>

```java
public void resetBatchSizePercentage()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetNodeNames` <a name="resetNodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodeNames"></a>

```java
public void resetNodeNames()
```

##### `resetNodePoolNames` <a name="resetNodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodePoolNames"></a>

```java
public void resetNodePoolNames()
```

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```java
public void resetRespectPdb()
```

##### `resetRespectRestrictScaleDown` <a name="resetRespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown"></a>

```java
public void resetRespectRestrictScaleDown()
```

##### `resetVngIds` <a name="resetVngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetVngIds"></a>

```java
public void resetVngIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNamesInput">nodeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput">nodePoolNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput">respectRestrictScaleDownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIdsInput">vngIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNames">nodeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNames">nodePoolNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown">respectRestrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIds">vngIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```java
public java.lang.Number getBatchMinHealthyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.Number getBatchSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nodeNamesInput`<sup>Optional</sup> <a name="nodeNamesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNamesInput"></a>

```java
public java.util.List<java.lang.String> getNodeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodePoolNamesInput`<sup>Optional</sup> <a name="nodePoolNamesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput"></a>

```java
public java.util.List<java.lang.String> getNodePoolNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```java
public java.lang.Object getRespectPdbInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `respectRestrictScaleDownInput`<sup>Optional</sup> <a name="respectRestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput"></a>

```java
public java.lang.Object getRespectRestrictScaleDownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vngIdsInput`<sup>Optional</sup> <a name="vngIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIdsInput"></a>

```java
public java.util.List<java.lang.String> getVngIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `nodeNames`<sup>Required</sup> <a name="nodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNames"></a>

```java
public java.util.List<java.lang.String> getNodeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodePoolNames`<sup>Required</sup> <a name="nodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNames"></a>

```java
public java.util.List<java.lang.String> getNodePoolNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `respectRestrictScaleDown`<sup>Required</sup> <a name="respectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown"></a>

```java
public java.lang.Object getRespectRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vngIds`<sup>Required</sup> <a name="vngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIds"></a>

```java
public java.util.List<java.lang.String> getVngIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```java
public OceanAksNpUpdatePolicyRollConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---



