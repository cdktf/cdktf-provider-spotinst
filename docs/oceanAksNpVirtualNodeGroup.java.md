# `oceanAksNpVirtualNodeGroup` Submodule <a name="`oceanAksNpVirtualNodeGroup` Submodule" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksNpVirtualNodeGroup <a name="OceanAksNpVirtualNodeGroup" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group spotinst_ocean_aks_np_virtual_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroup;

OceanAksNpVirtualNodeGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .oceanId(java.lang.String)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .enableNodePublicIp(java.lang.Boolean)
//  .enableNodePublicIp(IResolvable)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .headrooms(IResolvable)
//  .headrooms(java.util.List<OceanAksNpVirtualNodeGroupHeadrooms>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxCount(java.lang.Number)
//  .maxPodsPerNode(java.lang.Number)
//  .minCount(java.lang.Number)
//  .osDiskSizeGb(java.lang.Number)
//  .osDiskType(java.lang.String)
//  .osType(java.lang.String)
//  .spotPercentage(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<OceanAksNpVirtualNodeGroupTaints>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.enableNodePublicIp">enableNodePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.headrooms">headrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>></code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.minCount">minCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>></code> | taints block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}.

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.oceanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}.

---

##### `enableNodePublicIp`<sup>Optional</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.enableNodePublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}.

---

##### `headrooms`<sup>Optional</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.headrooms"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>>

headrooms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#headrooms OceanAksNpVirtualNodeGroup#headrooms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}.

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}.

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxPodsPerNode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}.

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.minCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}.

---

##### `osDiskSizeGb`<sup>Optional</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}.

---

##### `osDiskType`<sup>Optional</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}.

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.spotPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.taints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#taints OceanAksNpVirtualNodeGroup#taints}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putHeadrooms">putHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetEnableNodePublicIp">resetEnableNodePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetHeadrooms">resetHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMinCount">resetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskSizeGb">resetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskType">resetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putHeadrooms` <a name="putHeadrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putHeadrooms"></a>

```java
public void putHeadrooms(IResolvable OR java.util.List<OceanAksNpVirtualNodeGroupHeadrooms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putHeadrooms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putTaints"></a>

```java
public void putTaints(IResolvable OR java.util.List<OceanAksNpVirtualNodeGroupTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putTaints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>>

---

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetEnableNodePublicIp` <a name="resetEnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetEnableNodePublicIp"></a>

```java
public void resetEnableNodePublicIp()
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetFallbackToOndemand"></a>

```java
public void resetFallbackToOndemand()
```

##### `resetHeadrooms` <a name="resetHeadrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetHeadrooms"></a>

```java
public void resetHeadrooms()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxCount"></a>

```java
public void resetMaxCount()
```

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxPodsPerNode"></a>

```java
public void resetMaxPodsPerNode()
```

##### `resetMinCount` <a name="resetMinCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMinCount"></a>

```java
public void resetMinCount()
```

##### `resetOsDiskSizeGb` <a name="resetOsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskSizeGb"></a>

```java
public void resetOsDiskSizeGb()
```

##### `resetOsDiskType` <a name="resetOsDiskType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskType"></a>

```java
public void resetOsDiskType()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetSpotPercentage"></a>

```java
public void resetSpotPercentage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTaints"></a>

```java
public void resetTaints()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroup;

OceanAksNpVirtualNodeGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroup;

OceanAksNpVirtualNodeGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroup;

OceanAksNpVirtualNodeGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headrooms">headrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList">OceanAksNpVirtualNodeGroupHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList">OceanAksNpVirtualNodeGroupTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIpInput">enableNodePublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headroomsInput">headroomsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCountInput">maxCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCountInput">minCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanIdInput">oceanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGbInput">osDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskTypeInput">osDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentageInput">spotPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taintsInput">taintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIp">enableNodePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `headrooms`<sup>Required</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headrooms"></a>

```java
public OceanAksNpVirtualNodeGroupHeadroomsList getHeadrooms();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList">OceanAksNpVirtualNodeGroupHeadroomsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taints"></a>

```java
public OceanAksNpVirtualNodeGroupTaintsList getTaints();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList">OceanAksNpVirtualNodeGroupTaintsList</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableNodePublicIpInput`<sup>Optional</sup> <a name="enableNodePublicIpInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIpInput"></a>

```java
public java.lang.Object getEnableNodePublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemandInput"></a>

```java
public java.lang.Object getFallbackToOndemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headroomsInput`<sup>Optional</sup> <a name="headroomsInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headroomsInput"></a>

```java
public java.lang.Object getHeadroomsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCountInput"></a>

```java
public java.lang.Number getMaxCountInput();
```

- *Type:* java.lang.Number

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNodeInput"></a>

```java
public java.lang.Number getMaxPodsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `minCountInput`<sup>Optional</sup> <a name="minCountInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCountInput"></a>

```java
public java.lang.Number getMinCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oceanIdInput`<sup>Optional</sup> <a name="oceanIdInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanIdInput"></a>

```java
public java.lang.String getOceanIdInput();
```

- *Type:* java.lang.String

---

##### `osDiskSizeGbInput`<sup>Optional</sup> <a name="osDiskSizeGbInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGbInput"></a>

```java
public java.lang.Number getOsDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `osDiskTypeInput`<sup>Optional</sup> <a name="osDiskTypeInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskTypeInput"></a>

```java
public java.lang.String getOsDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentageInput"></a>

```java
public java.lang.Number getSpotPercentageInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taintsInput"></a>

```java
public java.lang.Object getTaintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableNodePublicIp`<sup>Required</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIp"></a>

```java
public java.lang.Object getEnableNodePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

---

##### `osDiskSizeGb`<sup>Required</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGb"></a>

```java
public java.lang.Number getOsDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `osDiskType`<sup>Required</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskType"></a>

```java
public java.lang.String getOsDiskType();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksNpVirtualNodeGroupConfig <a name="OceanAksNpVirtualNodeGroupConfig" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroupConfig;

OceanAksNpVirtualNodeGroupConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .oceanId(java.lang.String)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .enableNodePublicIp(java.lang.Boolean)
//  .enableNodePublicIp(IResolvable)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .headrooms(IResolvable)
//  .headrooms(java.util.List<OceanAksNpVirtualNodeGroupHeadrooms>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxCount(java.lang.Number)
//  .maxPodsPerNode(java.lang.Number)
//  .minCount(java.lang.Number)
//  .osDiskSizeGb(java.lang.Number)
//  .osDiskType(java.lang.String)
//  .osType(java.lang.String)
//  .spotPercentage(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<OceanAksNpVirtualNodeGroupTaints>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.enableNodePublicIp">enableNodePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.headrooms">headrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>></code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>></code> | taints block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}.

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}.

---

##### `enableNodePublicIp`<sup>Optional</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.enableNodePublicIp"></a>

```java
public java.lang.Object getEnableNodePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}.

---

##### `headrooms`<sup>Optional</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.headrooms"></a>

```java
public java.lang.Object getHeadrooms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>>

headrooms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#headrooms OceanAksNpVirtualNodeGroup#headrooms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}.

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}.

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}.

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}.

---

##### `osDiskSizeGb`<sup>Optional</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskSizeGb"></a>

```java
public java.lang.Number getOsDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}.

---

##### `osDiskType`<sup>Optional</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskType"></a>

```java
public java.lang.String getOsDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}.

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.taints"></a>

```java
public java.lang.Object getTaints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#taints OceanAksNpVirtualNodeGroup#taints}

---

### OceanAksNpVirtualNodeGroupHeadrooms <a name="OceanAksNpVirtualNodeGroupHeadrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroupHeadrooms;

OceanAksNpVirtualNodeGroupHeadrooms.builder()
    .numOfUnits(java.lang.Number)
//  .cpuPerUnit(java.lang.Number)
//  .gpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#num_of_units OceanAksNpVirtualNodeGroup#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#cpu_per_unit OceanAksNpVirtualNodeGroup#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#gpu_per_unit OceanAksNpVirtualNodeGroup#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#memory_per_unit OceanAksNpVirtualNodeGroup#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#num_of_units OceanAksNpVirtualNodeGroup#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#cpu_per_unit OceanAksNpVirtualNodeGroup#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#gpu_per_unit OceanAksNpVirtualNodeGroup#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#memory_per_unit OceanAksNpVirtualNodeGroup#memory_per_unit}.

---

### OceanAksNpVirtualNodeGroupTaints <a name="OceanAksNpVirtualNodeGroupTaints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroupTaints;

OceanAksNpVirtualNodeGroupTaints.builder()
    .effect(java.lang.String)
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#effect OceanAksNpVirtualNodeGroup#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#key OceanAksNpVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#value OceanAksNpVirtualNodeGroup#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#effect OceanAksNpVirtualNodeGroup#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#key OceanAksNpVirtualNodeGroup#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#value OceanAksNpVirtualNodeGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksNpVirtualNodeGroupHeadroomsList <a name="OceanAksNpVirtualNodeGroupHeadroomsList" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroupHeadroomsList;

new OceanAksNpVirtualNodeGroupHeadroomsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.get"></a>

```java
public OceanAksNpVirtualNodeGroupHeadroomsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>>

---


### OceanAksNpVirtualNodeGroupHeadroomsOutputReference <a name="OceanAksNpVirtualNodeGroupHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroupHeadroomsOutputReference;

new OceanAksNpVirtualNodeGroupHeadroomsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetGpuPerUnit"></a>

```java
public void resetGpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```java
public java.lang.Number getGpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a> OR com.hashicorp.cdktf.IResolvable

---


### OceanAksNpVirtualNodeGroupTaintsList <a name="OceanAksNpVirtualNodeGroupTaintsList" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroupTaintsList;

new OceanAksNpVirtualNodeGroupTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.get"></a>

```java
public OceanAksNpVirtualNodeGroupTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>>

---


### OceanAksNpVirtualNodeGroupTaintsOutputReference <a name="OceanAksNpVirtualNodeGroupTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks_np_virtual_node_group.OceanAksNpVirtualNodeGroupTaintsOutputReference;

new OceanAksNpVirtualNodeGroupTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a> OR com.hashicorp.cdktf.IResolvable

---


