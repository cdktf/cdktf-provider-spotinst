# `oceanGkeLaunchSpec` Submodule <a name="`oceanGkeLaunchSpec` Submodule" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanGkeLaunchSpec <a name="OceanGkeLaunchSpec" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec spotinst_ocean_gke_launch_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpec;

OceanGkeLaunchSpec.Builder.create(Construct scope, java.lang.String id)
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
    .oceanId(java.lang.String)
//  .autoscaleHeadrooms(IResolvable)
//  .autoscaleHeadrooms(java.util.List<OceanGkeLaunchSpecAutoscaleHeadrooms>)
//  .autoscaleHeadroomsAutomatic(IResolvable)
//  .autoscaleHeadroomsAutomatic(java.util.List<OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic>)
//  .createOptions(OceanGkeLaunchSpecCreateOptions)
//  .id(java.lang.String)
//  .instanceTypes(java.util.List<java.lang.String>)
//  .labels(IResolvable)
//  .labels(java.util.List<OceanGkeLaunchSpecLabels>)
//  .metadata(IResolvable)
//  .metadata(java.util.List<OceanGkeLaunchSpecMetadata>)
//  .name(java.lang.String)
//  .networkInterfaces(IResolvable)
//  .networkInterfaces(java.util.List<OceanGkeLaunchSpecNetworkInterfaces>)
//  .nodePoolName(java.lang.String)
//  .resourceLimits(OceanGkeLaunchSpecResourceLimits)
//  .restrictScaleDown(java.lang.Boolean)
//  .restrictScaleDown(IResolvable)
//  .rootVolumeSize(java.lang.Number)
//  .rootVolumeType(java.lang.String)
//  .schedulingTask(IResolvable)
//  .schedulingTask(java.util.List<OceanGkeLaunchSpecSchedulingTask>)
//  .serviceAccount(java.lang.String)
//  .shieldedInstanceConfig(OceanGkeLaunchSpecShieldedInstanceConfig)
//  .sourceImage(java.lang.String)
//  .storage(OceanGkeLaunchSpecStorage)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanGkeLaunchSpecStrategy>)
//  .tags(java.util.List<java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<OceanGkeLaunchSpecTaints>)
//  .updatePolicy(OceanGkeLaunchSpecUpdatePolicy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>></code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadroomsAutomatic">autoscaleHeadroomsAutomatic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>></code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.createOptions">createOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a></code> | create_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.networkInterfaces">networkInterfaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>></code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.nodePoolName">nodePoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.restrictScaleDown">restrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeSize">rootVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeType">rootVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.schedulingTask">schedulingTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>></code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>></code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | update_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.oceanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}.

---

##### `autoscaleHeadrooms`<sup>Optional</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadrooms"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>>

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#autoscale_headrooms OceanGkeLaunchSpec#autoscale_headrooms}

---

##### `autoscaleHeadroomsAutomatic`<sup>Optional</sup> <a name="autoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadroomsAutomatic"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>>

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#autoscale_headrooms_automatic OceanGkeLaunchSpec#autoscale_headrooms_automatic}

---

##### `createOptions`<sup>Optional</sup> <a name="createOptions" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.createOptions"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a>

create_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#create_options OceanGkeLaunchSpec#create_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.instanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#labels OceanGkeLaunchSpec#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.metadata"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#metadata OceanGkeLaunchSpec#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.networkInterfaces"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>>

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#network_interfaces OceanGkeLaunchSpec#network_interfaces}

---

##### `nodePoolName`<sup>Optional</sup> <a name="nodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.nodePoolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.resourceLimits"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#resource_limits OceanGkeLaunchSpec#resource_limits}

---

##### `restrictScaleDown`<sup>Optional</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.restrictScaleDown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}.

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}.

---

##### `rootVolumeType`<sup>Optional</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}.

---

##### `schedulingTask`<sup>Optional</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.schedulingTask"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>>

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#scheduling_task OceanGkeLaunchSpec#scheduling_task}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}.

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#shielded_instance_config OceanGkeLaunchSpec#shielded_instance_config}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.sourceImage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#storage OceanGkeLaunchSpec#storage}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.strategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#strategy OceanGkeLaunchSpec#strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.taints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#taints OceanGkeLaunchSpec#taints}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#update_policy OceanGkeLaunchSpec#update_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms">putAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic">putAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putCreateOptions">putCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask">putSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadrooms">resetAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadroomsAutomatic">resetAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetCreateOptions">resetCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetInstanceTypes">resetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNodePoolName">resetNodePoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRestrictScaleDown">resetRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeSize">resetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeType">resetRootVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSchedulingTask">resetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaleHeadrooms` <a name="putAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms"></a>

```java
public void putAutoscaleHeadrooms(IResolvable OR java.util.List<OceanGkeLaunchSpecAutoscaleHeadrooms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>>

---

##### `putAutoscaleHeadroomsAutomatic` <a name="putAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic"></a>

```java
public void putAutoscaleHeadroomsAutomatic(IResolvable OR java.util.List<OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>>

---

##### `putCreateOptions` <a name="putCreateOptions" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putCreateOptions"></a>

```java
public void putCreateOptions(OceanGkeLaunchSpecCreateOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putCreateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<OceanGkeLaunchSpecLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata"></a>

```java
public void putMetadata(IResolvable OR java.util.List<OceanGkeLaunchSpecMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces"></a>

```java
public void putNetworkInterfaces(IResolvable OR java.util.List<OceanGkeLaunchSpecNetworkInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits"></a>

```java
public void putResourceLimits(OceanGkeLaunchSpecResourceLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---

##### `putSchedulingTask` <a name="putSchedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask"></a>

```java
public void putSchedulingTask(IResolvable OR java.util.List<OceanGkeLaunchSpecSchedulingTask> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(OceanGkeLaunchSpecShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage"></a>

```java
public void putStorage(OceanGkeLaunchSpecStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy"></a>

```java
public void putStrategy(IResolvable OR java.util.List<OceanGkeLaunchSpecStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints"></a>

```java
public void putTaints(IResolvable OR java.util.List<OceanGkeLaunchSpecTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy"></a>

```java
public void putUpdatePolicy(OceanGkeLaunchSpecUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---

##### `resetAutoscaleHeadrooms` <a name="resetAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadrooms"></a>

```java
public void resetAutoscaleHeadrooms()
```

##### `resetAutoscaleHeadroomsAutomatic` <a name="resetAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadroomsAutomatic"></a>

```java
public void resetAutoscaleHeadroomsAutomatic()
```

##### `resetCreateOptions` <a name="resetCreateOptions" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetCreateOptions"></a>

```java
public void resetCreateOptions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceTypes` <a name="resetInstanceTypes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetInstanceTypes"></a>

```java
public void resetInstanceTypes()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNetworkInterfaces"></a>

```java
public void resetNetworkInterfaces()
```

##### `resetNodePoolName` <a name="resetNodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNodePoolName"></a>

```java
public void resetNodePoolName()
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetResourceLimits"></a>

```java
public void resetResourceLimits()
```

##### `resetRestrictScaleDown` <a name="resetRestrictScaleDown" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRestrictScaleDown"></a>

```java
public void resetRestrictScaleDown()
```

##### `resetRootVolumeSize` <a name="resetRootVolumeSize" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeSize"></a>

```java
public void resetRootVolumeSize()
```

##### `resetRootVolumeType` <a name="resetRootVolumeType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeType"></a>

```java
public void resetRootVolumeType()
```

##### `resetSchedulingTask` <a name="resetSchedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSchedulingTask"></a>

```java
public void resetSchedulingTask()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSourceImage"></a>

```java
public void resetSourceImage()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStrategy"></a>

```java
public void resetStrategy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTaints"></a>

```java
public void resetTaints()
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetUpdatePolicy"></a>

```java
public void resetUpdatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanGkeLaunchSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpec;

OceanGkeLaunchSpec.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpec;

OceanGkeLaunchSpec.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpec;

OceanGkeLaunchSpec.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpec;

OceanGkeLaunchSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanGkeLaunchSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanGkeLaunchSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanGkeLaunchSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanGkeLaunchSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanGkeLaunchSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList">OceanGkeLaunchSpecAutoscaleHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomatic">autoscaleHeadroomsAutomatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList">OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.createOptions">createOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference">OceanGkeLaunchSpecCreateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList">OceanGkeLaunchSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList">OceanGkeLaunchSpecMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList">OceanGkeLaunchSpecNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference">OceanGkeLaunchSpecResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTask">schedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList">OceanGkeLaunchSpecSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference">OceanGkeLaunchSpecShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference">OceanGkeLaunchSpecStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList">OceanGkeLaunchSpecStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList">OceanGkeLaunchSpecTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference">OceanGkeLaunchSpecUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomaticInput">autoscaleHeadroomsAutomaticInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsInput">autoscaleHeadroomsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.createOptionsInput">createOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypesInput">instanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadataInput">metadataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolNameInput">nodePoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanIdInput">oceanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDownInput">restrictScaleDownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSizeInput">rootVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeTypeInput">rootVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTaskInput">schedulingTaskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImageInput">sourceImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategyInput">strategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taintsInput">taintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolName">nodePoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDown">restrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSize">rootVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeType">rootVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaleHeadrooms`<sup>Required</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadrooms"></a>

```java
public OceanGkeLaunchSpecAutoscaleHeadroomsList getAutoscaleHeadrooms();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList">OceanGkeLaunchSpecAutoscaleHeadroomsList</a>

---

##### `autoscaleHeadroomsAutomatic`<sup>Required</sup> <a name="autoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomatic"></a>

```java
public OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList getAutoscaleHeadroomsAutomatic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList">OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList</a>

---

##### `createOptions`<sup>Required</sup> <a name="createOptions" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.createOptions"></a>

```java
public OceanGkeLaunchSpecCreateOptionsOutputReference getCreateOptions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference">OceanGkeLaunchSpecCreateOptionsOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labels"></a>

```java
public OceanGkeLaunchSpecLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList">OceanGkeLaunchSpecLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadata"></a>

```java
public OceanGkeLaunchSpecMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList">OceanGkeLaunchSpecMetadataList</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfaces"></a>

```java
public OceanGkeLaunchSpecNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList">OceanGkeLaunchSpecNetworkInterfacesList</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimits"></a>

```java
public OceanGkeLaunchSpecResourceLimitsOutputReference getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference">OceanGkeLaunchSpecResourceLimitsOutputReference</a>

---

##### `schedulingTask`<sup>Required</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTask"></a>

```java
public OceanGkeLaunchSpecSchedulingTaskList getSchedulingTask();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList">OceanGkeLaunchSpecSchedulingTaskList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfig"></a>

```java
public OceanGkeLaunchSpecShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference">OceanGkeLaunchSpecShieldedInstanceConfigOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storage"></a>

```java
public OceanGkeLaunchSpecStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference">OceanGkeLaunchSpecStorageOutputReference</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategy"></a>

```java
public OceanGkeLaunchSpecStrategyList getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList">OceanGkeLaunchSpecStrategyList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taints"></a>

```java
public OceanGkeLaunchSpecTaintsList getTaints();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList">OceanGkeLaunchSpecTaintsList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicy"></a>

```java
public OceanGkeLaunchSpecUpdatePolicyOutputReference getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference">OceanGkeLaunchSpecUpdatePolicyOutputReference</a>

---

##### `autoscaleHeadroomsAutomaticInput`<sup>Optional</sup> <a name="autoscaleHeadroomsAutomaticInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomaticInput"></a>

```java
public java.lang.Object getAutoscaleHeadroomsAutomaticInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>>

---

##### `autoscaleHeadroomsInput`<sup>Optional</sup> <a name="autoscaleHeadroomsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsInput"></a>

```java
public java.lang.Object getAutoscaleHeadroomsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>>

---

##### `createOptionsInput`<sup>Optional</sup> <a name="createOptionsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.createOptionsInput"></a>

```java
public OceanGkeLaunchSpecCreateOptions getCreateOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadataInput"></a>

```java
public java.lang.Object getMetadataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfacesInput"></a>

```java
public java.lang.Object getNetworkInterfacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>>

---

##### `nodePoolNameInput`<sup>Optional</sup> <a name="nodePoolNameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolNameInput"></a>

```java
public java.lang.String getNodePoolNameInput();
```

- *Type:* java.lang.String

---

##### `oceanIdInput`<sup>Optional</sup> <a name="oceanIdInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanIdInput"></a>

```java
public java.lang.String getOceanIdInput();
```

- *Type:* java.lang.String

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimitsInput"></a>

```java
public OceanGkeLaunchSpecResourceLimits getResourceLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---

##### `restrictScaleDownInput`<sup>Optional</sup> <a name="restrictScaleDownInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDownInput"></a>

```java
public java.lang.Object getRestrictScaleDownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rootVolumeSizeInput`<sup>Optional</sup> <a name="rootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSizeInput"></a>

```java
public java.lang.Number getRootVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `rootVolumeTypeInput`<sup>Optional</sup> <a name="rootVolumeTypeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeTypeInput"></a>

```java
public java.lang.String getRootVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `schedulingTaskInput`<sup>Optional</sup> <a name="schedulingTaskInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTaskInput"></a>

```java
public java.lang.Object getSchedulingTaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfigInput"></a>

```java
public OceanGkeLaunchSpecShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImageInput"></a>

```java
public java.lang.String getSourceImageInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storageInput"></a>

```java
public OceanGkeLaunchSpecStorage getStorageInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategyInput"></a>

```java
public java.lang.Object getStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taintsInput"></a>

```java
public java.lang.Object getTaintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>>

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicyInput"></a>

```java
public OceanGkeLaunchSpecUpdatePolicy getUpdatePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodePoolName`<sup>Required</sup> <a name="nodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolName"></a>

```java
public java.lang.String getNodePoolName();
```

- *Type:* java.lang.String

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

---

##### `restrictScaleDown`<sup>Required</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDown"></a>

```java
public java.lang.Object getRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rootVolumeSize`<sup>Required</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSize"></a>

```java
public java.lang.Number getRootVolumeSize();
```

- *Type:* java.lang.Number

---

##### `rootVolumeType`<sup>Required</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeType"></a>

```java
public java.lang.String getRootVolumeType();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanGkeLaunchSpecAutoscaleHeadrooms <a name="OceanGkeLaunchSpecAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecAutoscaleHeadrooms;

OceanGkeLaunchSpecAutoscaleHeadrooms.builder()
    .numOfUnits(java.lang.Number)
//  .cpuPerUnit(java.lang.Number)
//  .gpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}.

---

### OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic;

OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.builder()
//  .autoHeadroomPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#auto_headroom_percentage OceanGkeLaunchSpec#auto_headroom_percentage}. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage"></a>

```java
public java.lang.Number getAutoHeadroomPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#auto_headroom_percentage OceanGkeLaunchSpec#auto_headroom_percentage}.

---

### OceanGkeLaunchSpecConfig <a name="OceanGkeLaunchSpecConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecConfig;

OceanGkeLaunchSpecConfig.builder()
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
    .oceanId(java.lang.String)
//  .autoscaleHeadrooms(IResolvable)
//  .autoscaleHeadrooms(java.util.List<OceanGkeLaunchSpecAutoscaleHeadrooms>)
//  .autoscaleHeadroomsAutomatic(IResolvable)
//  .autoscaleHeadroomsAutomatic(java.util.List<OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic>)
//  .createOptions(OceanGkeLaunchSpecCreateOptions)
//  .id(java.lang.String)
//  .instanceTypes(java.util.List<java.lang.String>)
//  .labels(IResolvable)
//  .labels(java.util.List<OceanGkeLaunchSpecLabels>)
//  .metadata(IResolvable)
//  .metadata(java.util.List<OceanGkeLaunchSpecMetadata>)
//  .name(java.lang.String)
//  .networkInterfaces(IResolvable)
//  .networkInterfaces(java.util.List<OceanGkeLaunchSpecNetworkInterfaces>)
//  .nodePoolName(java.lang.String)
//  .resourceLimits(OceanGkeLaunchSpecResourceLimits)
//  .restrictScaleDown(java.lang.Boolean)
//  .restrictScaleDown(IResolvable)
//  .rootVolumeSize(java.lang.Number)
//  .rootVolumeType(java.lang.String)
//  .schedulingTask(IResolvable)
//  .schedulingTask(java.util.List<OceanGkeLaunchSpecSchedulingTask>)
//  .serviceAccount(java.lang.String)
//  .shieldedInstanceConfig(OceanGkeLaunchSpecShieldedInstanceConfig)
//  .sourceImage(java.lang.String)
//  .storage(OceanGkeLaunchSpecStorage)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanGkeLaunchSpecStrategy>)
//  .tags(java.util.List<java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<OceanGkeLaunchSpecTaints>)
//  .updatePolicy(OceanGkeLaunchSpecUpdatePolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>></code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadroomsAutomatic">autoscaleHeadroomsAutomatic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>></code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.createOptions">createOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a></code> | create_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.networkInterfaces">networkInterfaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>></code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.nodePoolName">nodePoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.restrictScaleDown">restrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeSize">rootVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeType">rootVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.schedulingTask">schedulingTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>></code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>></code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | update_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}.

---

##### `autoscaleHeadrooms`<sup>Optional</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadrooms"></a>

```java
public java.lang.Object getAutoscaleHeadrooms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>>

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#autoscale_headrooms OceanGkeLaunchSpec#autoscale_headrooms}

---

##### `autoscaleHeadroomsAutomatic`<sup>Optional</sup> <a name="autoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadroomsAutomatic"></a>

```java
public java.lang.Object getAutoscaleHeadroomsAutomatic();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>>

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#autoscale_headrooms_automatic OceanGkeLaunchSpec#autoscale_headrooms_automatic}

---

##### `createOptions`<sup>Optional</sup> <a name="createOptions" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.createOptions"></a>

```java
public OceanGkeLaunchSpecCreateOptions getCreateOptions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a>

create_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#create_options OceanGkeLaunchSpec#create_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#labels OceanGkeLaunchSpec#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.metadata"></a>

```java
public java.lang.Object getMetadata();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#metadata OceanGkeLaunchSpec#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.networkInterfaces"></a>

```java
public java.lang.Object getNetworkInterfaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>>

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#network_interfaces OceanGkeLaunchSpec#network_interfaces}

---

##### `nodePoolName`<sup>Optional</sup> <a name="nodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.nodePoolName"></a>

```java
public java.lang.String getNodePoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.resourceLimits"></a>

```java
public OceanGkeLaunchSpecResourceLimits getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#resource_limits OceanGkeLaunchSpec#resource_limits}

---

##### `restrictScaleDown`<sup>Optional</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.restrictScaleDown"></a>

```java
public java.lang.Object getRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}.

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeSize"></a>

```java
public java.lang.Number getRootVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}.

---

##### `rootVolumeType`<sup>Optional</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeType"></a>

```java
public java.lang.String getRootVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}.

---

##### `schedulingTask`<sup>Optional</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.schedulingTask"></a>

```java
public java.lang.Object getSchedulingTask();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>>

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#scheduling_task OceanGkeLaunchSpec#scheduling_task}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}.

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.shieldedInstanceConfig"></a>

```java
public OceanGkeLaunchSpecShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#shielded_instance_config OceanGkeLaunchSpec#shielded_instance_config}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.storage"></a>

```java
public OceanGkeLaunchSpecStorage getStorage();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#storage OceanGkeLaunchSpec#storage}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.strategy"></a>

```java
public java.lang.Object getStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#strategy OceanGkeLaunchSpec#strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.taints"></a>

```java
public java.lang.Object getTaints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#taints OceanGkeLaunchSpec#taints}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.updatePolicy"></a>

```java
public OceanGkeLaunchSpecUpdatePolicy getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#update_policy OceanGkeLaunchSpec#update_policy}

---

### OceanGkeLaunchSpecCreateOptions <a name="OceanGkeLaunchSpecCreateOptions" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecCreateOptions;

OceanGkeLaunchSpecCreateOptions.builder()
//  .initialNodes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions.property.initialNodes">initialNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#initial_nodes OceanGkeLaunchSpec#initial_nodes}. |

---

##### `initialNodes`<sup>Optional</sup> <a name="initialNodes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions.property.initialNodes"></a>

```java
public java.lang.Number getInitialNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#initial_nodes OceanGkeLaunchSpec#initial_nodes}.

---

### OceanGkeLaunchSpecLabels <a name="OceanGkeLaunchSpecLabels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecLabels;

OceanGkeLaunchSpecLabels.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecMetadata <a name="OceanGkeLaunchSpecMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecMetadata;

OceanGkeLaunchSpecMetadata.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecNetworkInterfaces <a name="OceanGkeLaunchSpecNetworkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfaces;

OceanGkeLaunchSpecNetworkInterfaces.builder()
    .network(java.lang.String)
//  .accessConfigs(IResolvable)
//  .accessConfigs(java.util.List<OceanGkeLaunchSpecNetworkInterfacesAccessConfigs>)
//  .aliasIpRanges(IResolvable)
//  .aliasIpRanges(java.util.List<OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges>)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.network">network</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#network OceanGkeLaunchSpec#network}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.accessConfigs">accessConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>></code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.aliasIpRanges">aliasIpRanges</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>></code> | alias_ip_ranges block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#project_id OceanGkeLaunchSpec#project_id}. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#network OceanGkeLaunchSpec#network}.

---

##### `accessConfigs`<sup>Optional</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.accessConfigs"></a>

```java
public java.lang.Object getAccessConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>>

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#access_configs OceanGkeLaunchSpec#access_configs}

---

##### `aliasIpRanges`<sup>Optional</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.aliasIpRanges"></a>

```java
public java.lang.Object getAliasIpRanges();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>>

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#alias_ip_ranges OceanGkeLaunchSpec#alias_ip_ranges}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#project_id OceanGkeLaunchSpec#project_id}.

---

### OceanGkeLaunchSpecNetworkInterfacesAccessConfigs <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs;

OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#type OceanGkeLaunchSpec#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#type OceanGkeLaunchSpec#type}.

---

### OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges;

OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.builder()
    .ipCidrRange(java.lang.String)
    .subnetworkRangeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#ip_cidr_range OceanGkeLaunchSpec#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#subnetwork_range_name OceanGkeLaunchSpec#subnetwork_range_name}. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#ip_cidr_range OceanGkeLaunchSpec#ip_cidr_range}.

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#subnetwork_range_name OceanGkeLaunchSpec#subnetwork_range_name}.

---

### OceanGkeLaunchSpecResourceLimits <a name="OceanGkeLaunchSpecResourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecResourceLimits;

OceanGkeLaunchSpecResourceLimits.builder()
//  .maxInstanceCount(java.lang.Number)
//  .minInstanceCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#max_instance_count OceanGkeLaunchSpec#max_instance_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#min_instance_count OceanGkeLaunchSpec#min_instance_count}. |

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#max_instance_count OceanGkeLaunchSpec#max_instance_count}.

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#min_instance_count OceanGkeLaunchSpec#min_instance_count}.

---

### OceanGkeLaunchSpecSchedulingTask <a name="OceanGkeLaunchSpecSchedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecSchedulingTask;

OceanGkeLaunchSpecSchedulingTask.builder()
    .cronExpression(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .taskType(java.lang.String)
//  .taskHeadroom(IResolvable)
//  .taskHeadroom(java.util.List<OceanGkeLaunchSpecSchedulingTaskTaskHeadroom>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#cron_expression OceanGkeLaunchSpec#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#is_enabled OceanGkeLaunchSpec#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#task_type OceanGkeLaunchSpec#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskHeadroom">taskHeadroom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>></code> | task_headroom block. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#cron_expression OceanGkeLaunchSpec#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#is_enabled OceanGkeLaunchSpec#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#task_type OceanGkeLaunchSpec#task_type}.

---

##### `taskHeadroom`<sup>Optional</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskHeadroom"></a>

```java
public java.lang.Object getTaskHeadroom();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>>

task_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#task_headroom OceanGkeLaunchSpec#task_headroom}

---

### OceanGkeLaunchSpecSchedulingTaskTaskHeadroom <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom;

OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.builder()
    .numOfUnits(java.lang.Number)
//  .cpuPerUnit(java.lang.Number)
//  .gpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}.

---

### OceanGkeLaunchSpecShieldedInstanceConfig <a name="OceanGkeLaunchSpecShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecShieldedInstanceConfig;

OceanGkeLaunchSpecShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#enable_integrity_monitoring OceanGkeLaunchSpec#enable_integrity_monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#enable_secure_boot OceanGkeLaunchSpec#enable_secure_boot}. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#enable_integrity_monitoring OceanGkeLaunchSpec#enable_integrity_monitoring}.

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#enable_secure_boot OceanGkeLaunchSpec#enable_secure_boot}.

---

### OceanGkeLaunchSpecStorage <a name="OceanGkeLaunchSpecStorage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecStorage;

OceanGkeLaunchSpecStorage.builder()
//  .localSsdCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#local_ssd_count OceanGkeLaunchSpec#local_ssd_count}. |

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#local_ssd_count OceanGkeLaunchSpec#local_ssd_count}.

---

### OceanGkeLaunchSpecStrategy <a name="OceanGkeLaunchSpecStrategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecStrategy;

OceanGkeLaunchSpecStrategy.builder()
//  .preemptiblePercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#preemptible_percentage OceanGkeLaunchSpec#preemptible_percentage}. |

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.property.preemptiblePercentage"></a>

```java
public java.lang.Number getPreemptiblePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#preemptible_percentage OceanGkeLaunchSpec#preemptible_percentage}.

---

### OceanGkeLaunchSpecTaints <a name="OceanGkeLaunchSpecTaints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecTaints;

OceanGkeLaunchSpecTaints.builder()
//  .effect(java.lang.String)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#effect OceanGkeLaunchSpec#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#effect OceanGkeLaunchSpec#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecUpdatePolicy <a name="OceanGkeLaunchSpecUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecUpdatePolicy;

OceanGkeLaunchSpecUpdatePolicy.builder()
    .shouldRoll(java.lang.Boolean)
    .shouldRoll(IResolvable)
//  .rollConfig(OceanGkeLaunchSpecUpdatePolicyRollConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#should_roll OceanGkeLaunchSpec#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#should_roll OceanGkeLaunchSpec#should_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.rollConfig"></a>

```java
public OceanGkeLaunchSpecUpdatePolicyRollConfig getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#roll_config OceanGkeLaunchSpec#roll_config}

---

### OceanGkeLaunchSpecUpdatePolicyRollConfig <a name="OceanGkeLaunchSpecUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecUpdatePolicyRollConfig;

OceanGkeLaunchSpecUpdatePolicyRollConfig.builder()
    .batchSizePercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#batch_size_percentage OceanGkeLaunchSpec#batch_size_percentage}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.210.0/docs/resources/ocean_gke_launch_spec#batch_size_percentage OceanGkeLaunchSpec#batch_size_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList;

new OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get"></a>

```java
public OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>>

---


### OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference;

new OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage"></a>

```java
public void resetAutoHeadroomPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput"></a>

```java
public java.lang.Number getAutoHeadroomPercentageInput();
```

- *Type:* java.lang.Number

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage"></a>

```java
public java.lang.Number getAutoHeadroomPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>

---


### OceanGkeLaunchSpecAutoscaleHeadroomsList <a name="OceanGkeLaunchSpecAutoscaleHeadroomsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecAutoscaleHeadroomsList;

new OceanGkeLaunchSpecAutoscaleHeadroomsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get"></a>

```java
public OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>>

---


### OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference <a name="OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference;

new OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit"></a>

```java
public void resetGpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```java
public java.lang.Number getGpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>

---


### OceanGkeLaunchSpecCreateOptionsOutputReference <a name="OceanGkeLaunchSpecCreateOptionsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecCreateOptionsOutputReference;

new OceanGkeLaunchSpecCreateOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.resetInitialNodes">resetInitialNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInitialNodes` <a name="resetInitialNodes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.resetInitialNodes"></a>

```java
public void resetInitialNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.initialNodesInput">initialNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.initialNodes">initialNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialNodesInput`<sup>Optional</sup> <a name="initialNodesInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.initialNodesInput"></a>

```java
public java.lang.Number getInitialNodesInput();
```

- *Type:* java.lang.Number

---

##### `initialNodes`<sup>Required</sup> <a name="initialNodes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.initialNodes"></a>

```java
public java.lang.Number getInitialNodes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptionsOutputReference.property.internalValue"></a>

```java
public OceanGkeLaunchSpecCreateOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecCreateOptions">OceanGkeLaunchSpecCreateOptions</a>

---


### OceanGkeLaunchSpecLabelsList <a name="OceanGkeLaunchSpecLabelsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecLabelsList;

new OceanGkeLaunchSpecLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get"></a>

```java
public OceanGkeLaunchSpecLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>>

---


### OceanGkeLaunchSpecLabelsOutputReference <a name="OceanGkeLaunchSpecLabelsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecLabelsOutputReference;

new OceanGkeLaunchSpecLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>

---


### OceanGkeLaunchSpecMetadataList <a name="OceanGkeLaunchSpecMetadataList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecMetadataList;

new OceanGkeLaunchSpecMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get"></a>

```java
public OceanGkeLaunchSpecMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>>

---


### OceanGkeLaunchSpecMetadataOutputReference <a name="OceanGkeLaunchSpecMetadataOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecMetadataOutputReference;

new OceanGkeLaunchSpecMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>

---


### OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList;

new OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get"></a>

```java
public OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>>

---


### OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference;

new OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>

---


### OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList;

new OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get"></a>

```java
public OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>>

---


### OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference;

new OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```java
public java.lang.String getSubnetworkRangeNameInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>

---


### OceanGkeLaunchSpecNetworkInterfacesList <a name="OceanGkeLaunchSpecNetworkInterfacesList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesList;

new OceanGkeLaunchSpecNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get"></a>

```java
public OceanGkeLaunchSpecNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>>

---


### OceanGkeLaunchSpecNetworkInterfacesOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecNetworkInterfacesOutputReference;

new OceanGkeLaunchSpecNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs">putAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges">putAliasIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAccessConfigs">resetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAliasIpRanges">resetAliasIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfigs` <a name="putAccessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs"></a>

```java
public void putAccessConfigs(IResolvable OR java.util.List<OceanGkeLaunchSpecNetworkInterfacesAccessConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>>

---

##### `putAliasIpRanges` <a name="putAliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges"></a>

```java
public void putAliasIpRanges(IResolvable OR java.util.List<OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>>

---

##### `resetAccessConfigs` <a name="resetAccessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAccessConfigs"></a>

```java
public void resetAccessConfigs()
```

##### `resetAliasIpRanges` <a name="resetAliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAliasIpRanges"></a>

```java
public void resetAliasIpRanges()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList">OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRanges">aliasIpRanges</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList">OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigsInput">accessConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRangesInput">aliasIpRangesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigs"></a>

```java
public OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList getAccessConfigs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList">OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList</a>

---

##### `aliasIpRanges`<sup>Required</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRanges"></a>

```java
public OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList getAliasIpRanges();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList">OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList</a>

---

##### `accessConfigsInput`<sup>Optional</sup> <a name="accessConfigsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigsInput"></a>

```java
public java.lang.Object getAccessConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>>

---

##### `aliasIpRangesInput`<sup>Optional</sup> <a name="aliasIpRangesInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRangesInput"></a>

```java
public java.lang.Object getAliasIpRangesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>

---


### OceanGkeLaunchSpecResourceLimitsOutputReference <a name="OceanGkeLaunchSpecResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecResourceLimitsOutputReference;

new OceanGkeLaunchSpecResourceLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```java
public void resetMaxInstanceCount()
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount"></a>

```java
public void resetMinInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```java
public java.lang.Number getMaxInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.internalValue"></a>

```java
public OceanGkeLaunchSpecResourceLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---


### OceanGkeLaunchSpecSchedulingTaskList <a name="OceanGkeLaunchSpecSchedulingTaskList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecSchedulingTaskList;

new OceanGkeLaunchSpecSchedulingTaskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get"></a>

```java
public OceanGkeLaunchSpecSchedulingTaskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>>

---


### OceanGkeLaunchSpecSchedulingTaskOutputReference <a name="OceanGkeLaunchSpecSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecSchedulingTaskOutputReference;

new OceanGkeLaunchSpecSchedulingTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom">putTaskHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom">resetTaskHeadroom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaskHeadroom` <a name="putTaskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom"></a>

```java
public void putTaskHeadroom(IResolvable OR java.util.List<OceanGkeLaunchSpecSchedulingTaskTaskHeadroom> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>>

---

##### `resetTaskHeadroom` <a name="resetTaskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom"></a>

```java
public void resetTaskHeadroom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom">taskHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList">OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput">taskHeadroomInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `taskHeadroom`<sup>Required</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom"></a>

```java
public OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList getTaskHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList">OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskHeadroomInput`<sup>Optional</sup> <a name="taskHeadroomInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput"></a>

```java
public java.lang.Object getTaskHeadroomInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>>

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>

---


### OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList;

new OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get"></a>

```java
public OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>>

---


### OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference;

new OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit"></a>

```java
public void resetGpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput"></a>

```java
public java.lang.Number getGpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>

---


### OceanGkeLaunchSpecShieldedInstanceConfigOutputReference <a name="OceanGkeLaunchSpecShieldedInstanceConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference;

new OceanGkeLaunchSpecShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public OceanGkeLaunchSpecShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---


### OceanGkeLaunchSpecStorageOutputReference <a name="OceanGkeLaunchSpecStorageOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecStorageOutputReference;

new OceanGkeLaunchSpecStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resetLocalSsdCount"></a>

```java
public void resetLocalSsdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.internalValue"></a>

```java
public OceanGkeLaunchSpecStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---


### OceanGkeLaunchSpecStrategyList <a name="OceanGkeLaunchSpecStrategyList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecStrategyList;

new OceanGkeLaunchSpecStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get"></a>

```java
public OceanGkeLaunchSpecStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>>

---


### OceanGkeLaunchSpecStrategyOutputReference <a name="OceanGkeLaunchSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecStrategyOutputReference;

new OceanGkeLaunchSpecStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resetPreemptiblePercentage">resetPreemptiblePercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreemptiblePercentage` <a name="resetPreemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resetPreemptiblePercentage"></a>

```java
public void resetPreemptiblePercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentageInput">preemptiblePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preemptiblePercentageInput`<sup>Optional</sup> <a name="preemptiblePercentageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentageInput"></a>

```java
public java.lang.Number getPreemptiblePercentageInput();
```

- *Type:* java.lang.Number

---

##### `preemptiblePercentage`<sup>Required</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentage"></a>

```java
public java.lang.Number getPreemptiblePercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>

---


### OceanGkeLaunchSpecTaintsList <a name="OceanGkeLaunchSpecTaintsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecTaintsList;

new OceanGkeLaunchSpecTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get"></a>

```java
public OceanGkeLaunchSpecTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>>

---


### OceanGkeLaunchSpecTaintsOutputReference <a name="OceanGkeLaunchSpecTaintsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecTaintsOutputReference;

new OceanGkeLaunchSpecTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>

---


### OceanGkeLaunchSpecUpdatePolicyOutputReference <a name="OceanGkeLaunchSpecUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecUpdatePolicyOutputReference;

new OceanGkeLaunchSpecUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig"></a>

```java
public void putRollConfig(OceanGkeLaunchSpecUpdatePolicyRollConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resetRollConfig"></a>

```java
public void resetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference">OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfig"></a>

```java
public OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference">OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference</a>

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput"></a>

```java
public OceanGkeLaunchSpecUpdatePolicyRollConfig getRollConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput"></a>

```java
public java.lang.Object getShouldRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.internalValue"></a>

```java
public OceanGkeLaunchSpecUpdatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---


### OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference <a name="OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_launch_spec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference;

new OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.Number getBatchSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```java
public OceanGkeLaunchSpecUpdatePolicyRollConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---



