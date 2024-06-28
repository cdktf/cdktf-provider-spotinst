# `oceanEcsLaunchSpec` Submodule <a name="`oceanEcsLaunchSpec` Submodule" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanEcsLaunchSpec <a name="OceanEcsLaunchSpec" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec spotinst_ocean_ecs_launch_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpec;

OceanEcsLaunchSpec.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .oceanId(java.lang.String)
//  .attributes(IResolvable)
//  .attributes(java.util.List<OceanEcsLaunchSpecAttributes>)
//  .autoscaleHeadrooms(IResolvable)
//  .autoscaleHeadrooms(java.util.List<OceanEcsLaunchSpecAutoscaleHeadrooms>)
//  .blockDeviceMappings(IResolvable)
//  .blockDeviceMappings(java.util.List<OceanEcsLaunchSpecBlockDeviceMappings>)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .images(IResolvable)
//  .images(java.util.List<OceanEcsLaunchSpecImages>)
//  .instanceMetadataOptions(OceanEcsLaunchSpecInstanceMetadataOptions)
//  .instanceTypes(java.util.List<java.lang.String>)
//  .preferredSpotTypes(java.util.List<java.lang.String>)
//  .restrictScaleDown(java.lang.Boolean)
//  .restrictScaleDown(IResolvable)
//  .schedulingTask(IResolvable)
//  .schedulingTask(java.util.List<OceanEcsLaunchSpecSchedulingTask>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanEcsLaunchSpecStrategy>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable)
//  .tags(java.util.List<OceanEcsLaunchSpecTags>)
//  .userData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#name OceanEcsLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#ocean_id OceanEcsLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.attributes">attributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>></code> | attributes block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>></code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.blockDeviceMappings">blockDeviceMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>></code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#iam_instance_profile OceanEcsLaunchSpec#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#id OceanEcsLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#image_id OceanEcsLaunchSpec#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.images">images</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>></code> | images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#instance_types OceanEcsLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.preferredSpotTypes">preferredSpotTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#preferred_spot_types OceanEcsLaunchSpec#preferred_spot_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.restrictScaleDown">restrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#restrict_scale_down OceanEcsLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.schedulingTask">schedulingTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>></code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#security_group_ids OceanEcsLaunchSpec#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#subnet_ids OceanEcsLaunchSpec#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#user_data OceanEcsLaunchSpec#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#name OceanEcsLaunchSpec#name}.

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.oceanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#ocean_id OceanEcsLaunchSpec#ocean_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.attributes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#attributes OceanEcsLaunchSpec#attributes}

---

##### `autoscaleHeadrooms`<sup>Optional</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.autoscaleHeadrooms"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>>

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#autoscale_headrooms OceanEcsLaunchSpec#autoscale_headrooms}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>>

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#block_device_mappings OceanEcsLaunchSpec#block_device_mappings}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#iam_instance_profile OceanEcsLaunchSpec#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#id OceanEcsLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#image_id OceanEcsLaunchSpec#image_id}.

---

##### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.images"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>>

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#images OceanEcsLaunchSpec#images}

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.instanceMetadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#instance_metadata_options OceanEcsLaunchSpec#instance_metadata_options}

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.instanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#instance_types OceanEcsLaunchSpec#instance_types}.

---

##### `preferredSpotTypes`<sup>Optional</sup> <a name="preferredSpotTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.preferredSpotTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#preferred_spot_types OceanEcsLaunchSpec#preferred_spot_types}.

---

##### `restrictScaleDown`<sup>Optional</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.restrictScaleDown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#restrict_scale_down OceanEcsLaunchSpec#restrict_scale_down}.

---

##### `schedulingTask`<sup>Optional</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.schedulingTask"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>>

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#scheduling_task OceanEcsLaunchSpec#scheduling_task}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#security_group_ids OceanEcsLaunchSpec#security_group_ids}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.strategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#strategy OceanEcsLaunchSpec#strategy}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#subnet_ids OceanEcsLaunchSpec#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#tags OceanEcsLaunchSpec#tags}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#user_data OceanEcsLaunchSpec#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putAutoscaleHeadrooms">putAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putImages">putImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putInstanceMetadataOptions">putInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putSchedulingTask">putSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetAutoscaleHeadrooms">resetAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetImages">resetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetInstanceMetadataOptions">resetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetInstanceTypes">resetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetPreferredSpotTypes">resetPreferredSpotTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetRestrictScaleDown">resetRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetSchedulingTask">resetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putAttributes"></a>

```java
public void putAttributes(IResolvable OR java.util.List<OceanEcsLaunchSpecAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putAttributes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>>

---

##### `putAutoscaleHeadrooms` <a name="putAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putAutoscaleHeadrooms"></a>

```java
public void putAutoscaleHeadrooms(IResolvable OR java.util.List<OceanEcsLaunchSpecAutoscaleHeadrooms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putAutoscaleHeadrooms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>>

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putBlockDeviceMappings"></a>

```java
public void putBlockDeviceMappings(IResolvable OR java.util.List<OceanEcsLaunchSpecBlockDeviceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putBlockDeviceMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>>

---

##### `putImages` <a name="putImages" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putImages"></a>

```java
public void putImages(IResolvable OR java.util.List<OceanEcsLaunchSpecImages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putImages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>>

---

##### `putInstanceMetadataOptions` <a name="putInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putInstanceMetadataOptions"></a>

```java
public void putInstanceMetadataOptions(OceanEcsLaunchSpecInstanceMetadataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a>

---

##### `putSchedulingTask` <a name="putSchedulingTask" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putSchedulingTask"></a>

```java
public void putSchedulingTask(IResolvable OR java.util.List<OceanEcsLaunchSpecSchedulingTask> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putSchedulingTask.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putStrategy"></a>

```java
public void putStrategy(IResolvable OR java.util.List<OceanEcsLaunchSpecStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<OceanEcsLaunchSpecTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAutoscaleHeadrooms` <a name="resetAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetAutoscaleHeadrooms"></a>

```java
public void resetAutoscaleHeadrooms()
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetBlockDeviceMappings"></a>

```java
public void resetBlockDeviceMappings()
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetIamInstanceProfile"></a>

```java
public void resetIamInstanceProfile()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetId"></a>

```java
public void resetId()
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetImages` <a name="resetImages" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetImages"></a>

```java
public void resetImages()
```

##### `resetInstanceMetadataOptions` <a name="resetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetInstanceMetadataOptions"></a>

```java
public void resetInstanceMetadataOptions()
```

##### `resetInstanceTypes` <a name="resetInstanceTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetInstanceTypes"></a>

```java
public void resetInstanceTypes()
```

##### `resetPreferredSpotTypes` <a name="resetPreferredSpotTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetPreferredSpotTypes"></a>

```java
public void resetPreferredSpotTypes()
```

##### `resetRestrictScaleDown` <a name="resetRestrictScaleDown" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetRestrictScaleDown"></a>

```java
public void resetRestrictScaleDown()
```

##### `resetSchedulingTask` <a name="resetSchedulingTask" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetSchedulingTask"></a>

```java
public void resetSchedulingTask()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetStrategy"></a>

```java
public void resetStrategy()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.resetUserData"></a>

```java
public void resetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanEcsLaunchSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpec;

OceanEcsLaunchSpec.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpec;

OceanEcsLaunchSpec.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpec;

OceanEcsLaunchSpec.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpec;

OceanEcsLaunchSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanEcsLaunchSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanEcsLaunchSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanEcsLaunchSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanEcsLaunchSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanEcsLaunchSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList">OceanEcsLaunchSpecAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList">OceanEcsLaunchSpecAutoscaleHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList">OceanEcsLaunchSpecBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.images">images</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList">OceanEcsLaunchSpecImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference">OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.schedulingTask">schedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList">OceanEcsLaunchSpecSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList">OceanEcsLaunchSpecStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList">OceanEcsLaunchSpecTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.attributesInput">attributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.autoscaleHeadroomsInput">autoscaleHeadroomsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.imagesInput">imagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceMetadataOptionsInput">instanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceTypesInput">instanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.oceanIdInput">oceanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.preferredSpotTypesInput">preferredSpotTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.restrictScaleDownInput">restrictScaleDownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.schedulingTaskInput">schedulingTaskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.strategyInput">strategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.preferredSpotTypes">preferredSpotTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.restrictScaleDown">restrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.attributes"></a>

```java
public OceanEcsLaunchSpecAttributesList getAttributes();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList">OceanEcsLaunchSpecAttributesList</a>

---

##### `autoscaleHeadrooms`<sup>Required</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.autoscaleHeadrooms"></a>

```java
public OceanEcsLaunchSpecAutoscaleHeadroomsList getAutoscaleHeadrooms();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList">OceanEcsLaunchSpecAutoscaleHeadroomsList</a>

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.blockDeviceMappings"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsList getBlockDeviceMappings();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList">OceanEcsLaunchSpecBlockDeviceMappingsList</a>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.images"></a>

```java
public OceanEcsLaunchSpecImagesList getImages();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList">OceanEcsLaunchSpecImagesList</a>

---

##### `instanceMetadataOptions`<sup>Required</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceMetadataOptions"></a>

```java
public OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference getInstanceMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference">OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference</a>

---

##### `schedulingTask`<sup>Required</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.schedulingTask"></a>

```java
public OceanEcsLaunchSpecSchedulingTaskList getSchedulingTask();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList">OceanEcsLaunchSpecSchedulingTaskList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.strategy"></a>

```java
public OceanEcsLaunchSpecStrategyList getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList">OceanEcsLaunchSpecStrategyList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.tags"></a>

```java
public OceanEcsLaunchSpecTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList">OceanEcsLaunchSpecTagsList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.attributesInput"></a>

```java
public java.lang.Object getAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>>

---

##### `autoscaleHeadroomsInput`<sup>Optional</sup> <a name="autoscaleHeadroomsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.autoscaleHeadroomsInput"></a>

```java
public java.lang.Object getAutoscaleHeadroomsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>>

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.blockDeviceMappingsInput"></a>

```java
public java.lang.Object getBlockDeviceMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.iamInstanceProfileInput"></a>

```java
public java.lang.String getIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `imagesInput`<sup>Optional</sup> <a name="imagesInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.imagesInput"></a>

```java
public java.lang.Object getImagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>>

---

##### `instanceMetadataOptionsInput`<sup>Optional</sup> <a name="instanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceMetadataOptionsInput"></a>

```java
public OceanEcsLaunchSpecInstanceMetadataOptions getInstanceMetadataOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a>

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oceanIdInput`<sup>Optional</sup> <a name="oceanIdInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.oceanIdInput"></a>

```java
public java.lang.String getOceanIdInput();
```

- *Type:* java.lang.String

---

##### `preferredSpotTypesInput`<sup>Optional</sup> <a name="preferredSpotTypesInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.preferredSpotTypesInput"></a>

```java
public java.util.List<java.lang.String> getPreferredSpotTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictScaleDownInput`<sup>Optional</sup> <a name="restrictScaleDownInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.restrictScaleDownInput"></a>

```java
public java.lang.Object getRestrictScaleDownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schedulingTaskInput`<sup>Optional</sup> <a name="schedulingTaskInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.schedulingTaskInput"></a>

```java
public java.lang.Object getSchedulingTaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.strategyInput"></a>

```java
public java.lang.Object getStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

---

##### `preferredSpotTypes`<sup>Required</sup> <a name="preferredSpotTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.preferredSpotTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredSpotTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictScaleDown`<sup>Required</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.restrictScaleDown"></a>

```java
public java.lang.Object getRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpec.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanEcsLaunchSpecAttributes <a name="OceanEcsLaunchSpecAttributes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecAttributes;

OceanEcsLaunchSpecAttributes.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#key OceanEcsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#value OceanEcsLaunchSpec#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#key OceanEcsLaunchSpec#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#value OceanEcsLaunchSpec#value}.

---

### OceanEcsLaunchSpecAutoscaleHeadrooms <a name="OceanEcsLaunchSpecAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecAutoscaleHeadrooms;

OceanEcsLaunchSpecAutoscaleHeadrooms.builder()
    .numOfUnits(java.lang.Number)
//  .cpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#num_of_units OceanEcsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#cpu_per_unit OceanEcsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#memory_per_unit OceanEcsLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#num_of_units OceanEcsLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#cpu_per_unit OceanEcsLaunchSpec#cpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#memory_per_unit OceanEcsLaunchSpec#memory_per_unit}.

---

### OceanEcsLaunchSpecBlockDeviceMappings <a name="OceanEcsLaunchSpecBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecBlockDeviceMappings;

OceanEcsLaunchSpecBlockDeviceMappings.builder()
    .deviceName(java.lang.String)
//  .ebs(OceanEcsLaunchSpecBlockDeviceMappingsEbs)
//  .noDevice(java.lang.String)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#device_name OceanEcsLaunchSpec#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs">OceanEcsLaunchSpecBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#no_device OceanEcsLaunchSpec#no_device}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#virtual_name OceanEcsLaunchSpec#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#device_name OceanEcsLaunchSpec#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.ebs"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbs getEbs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs">OceanEcsLaunchSpecBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#ebs OceanEcsLaunchSpec#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#no_device OceanEcsLaunchSpec#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#virtual_name OceanEcsLaunchSpec#virtual_name}.

---

### OceanEcsLaunchSpecBlockDeviceMappingsEbs <a name="OceanEcsLaunchSpecBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecBlockDeviceMappingsEbs;

OceanEcsLaunchSpecBlockDeviceMappingsEbs.builder()
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .dynamicVolumeSize(OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .snapshotId(java.lang.String)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#delete_on_termination OceanEcsLaunchSpec#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#encrypted OceanEcsLaunchSpec#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#iops OceanEcsLaunchSpec#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#kms_key_id OceanEcsLaunchSpec#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#snapshot_id OceanEcsLaunchSpec#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#throughput OceanEcsLaunchSpec#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#volume_size OceanEcsLaunchSpec#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#volume_type OceanEcsLaunchSpec#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#delete_on_termination OceanEcsLaunchSpec#delete_on_termination}.

---

##### `dynamicVolumeSize`<sup>Optional</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize getDynamicVolumeSize();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#dynamic_volume_size OceanEcsLaunchSpec#dynamic_volume_size}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#encrypted OceanEcsLaunchSpec#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#iops OceanEcsLaunchSpec#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#kms_key_id OceanEcsLaunchSpec#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#snapshot_id OceanEcsLaunchSpec#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#throughput OceanEcsLaunchSpec#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#volume_size OceanEcsLaunchSpec#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#volume_type OceanEcsLaunchSpec#volume_type}.

---

### OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize;

OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.builder()
    .baseSize(java.lang.Number)
    .resource(java.lang.String)
    .sizePerResourceUnit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">baseSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#base_size OceanEcsLaunchSpec#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">resource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#resource OceanEcsLaunchSpec#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#size_per_resource_unit OceanEcsLaunchSpec#size_per_resource_unit}. |

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```java
public java.lang.Number getBaseSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#base_size OceanEcsLaunchSpec#base_size}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#resource OceanEcsLaunchSpec#resource}.

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```java
public java.lang.Number getSizePerResourceUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#size_per_resource_unit OceanEcsLaunchSpec#size_per_resource_unit}.

---

### OceanEcsLaunchSpecConfig <a name="OceanEcsLaunchSpecConfig" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecConfig;

OceanEcsLaunchSpecConfig.builder()
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
    .name(java.lang.String)
    .oceanId(java.lang.String)
//  .attributes(IResolvable)
//  .attributes(java.util.List<OceanEcsLaunchSpecAttributes>)
//  .autoscaleHeadrooms(IResolvable)
//  .autoscaleHeadrooms(java.util.List<OceanEcsLaunchSpecAutoscaleHeadrooms>)
//  .blockDeviceMappings(IResolvable)
//  .blockDeviceMappings(java.util.List<OceanEcsLaunchSpecBlockDeviceMappings>)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .images(IResolvable)
//  .images(java.util.List<OceanEcsLaunchSpecImages>)
//  .instanceMetadataOptions(OceanEcsLaunchSpecInstanceMetadataOptions)
//  .instanceTypes(java.util.List<java.lang.String>)
//  .preferredSpotTypes(java.util.List<java.lang.String>)
//  .restrictScaleDown(java.lang.Boolean)
//  .restrictScaleDown(IResolvable)
//  .schedulingTask(IResolvable)
//  .schedulingTask(java.util.List<OceanEcsLaunchSpecSchedulingTask>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanEcsLaunchSpecStrategy>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable)
//  .tags(java.util.List<OceanEcsLaunchSpecTags>)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#name OceanEcsLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#ocean_id OceanEcsLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.attributes">attributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>></code> | attributes block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>></code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>></code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#iam_instance_profile OceanEcsLaunchSpec#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#id OceanEcsLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#image_id OceanEcsLaunchSpec#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.images">images</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>></code> | images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#instance_types OceanEcsLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.preferredSpotTypes">preferredSpotTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#preferred_spot_types OceanEcsLaunchSpec#preferred_spot_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.restrictScaleDown">restrictScaleDown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#restrict_scale_down OceanEcsLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.schedulingTask">schedulingTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>></code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#security_group_ids OceanEcsLaunchSpec#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#subnet_ids OceanEcsLaunchSpec#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#user_data OceanEcsLaunchSpec#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#name OceanEcsLaunchSpec#name}.

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#ocean_id OceanEcsLaunchSpec#ocean_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.attributes"></a>

```java
public java.lang.Object getAttributes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#attributes OceanEcsLaunchSpec#attributes}

---

##### `autoscaleHeadrooms`<sup>Optional</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.autoscaleHeadrooms"></a>

```java
public java.lang.Object getAutoscaleHeadrooms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>>

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#autoscale_headrooms OceanEcsLaunchSpec#autoscale_headrooms}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.blockDeviceMappings"></a>

```java
public java.lang.Object getBlockDeviceMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>>

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#block_device_mappings OceanEcsLaunchSpec#block_device_mappings}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#iam_instance_profile OceanEcsLaunchSpec#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#id OceanEcsLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#image_id OceanEcsLaunchSpec#image_id}.

---

##### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.images"></a>

```java
public java.lang.Object getImages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>>

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#images OceanEcsLaunchSpec#images}

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.instanceMetadataOptions"></a>

```java
public OceanEcsLaunchSpecInstanceMetadataOptions getInstanceMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#instance_metadata_options OceanEcsLaunchSpec#instance_metadata_options}

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#instance_types OceanEcsLaunchSpec#instance_types}.

---

##### `preferredSpotTypes`<sup>Optional</sup> <a name="preferredSpotTypes" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.preferredSpotTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredSpotTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#preferred_spot_types OceanEcsLaunchSpec#preferred_spot_types}.

---

##### `restrictScaleDown`<sup>Optional</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.restrictScaleDown"></a>

```java
public java.lang.Object getRestrictScaleDown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#restrict_scale_down OceanEcsLaunchSpec#restrict_scale_down}.

---

##### `schedulingTask`<sup>Optional</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.schedulingTask"></a>

```java
public java.lang.Object getSchedulingTask();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>>

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#scheduling_task OceanEcsLaunchSpec#scheduling_task}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#security_group_ids OceanEcsLaunchSpec#security_group_ids}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.strategy"></a>

```java
public java.lang.Object getStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#strategy OceanEcsLaunchSpec#strategy}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#subnet_ids OceanEcsLaunchSpec#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#tags OceanEcsLaunchSpec#tags}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#user_data OceanEcsLaunchSpec#user_data}.

---

### OceanEcsLaunchSpecImages <a name="OceanEcsLaunchSpecImages" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecImages;

OceanEcsLaunchSpecImages.builder()
//  .imageId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#image_id OceanEcsLaunchSpec#image_id}. |

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#image_id OceanEcsLaunchSpec#image_id}.

---

### OceanEcsLaunchSpecInstanceMetadataOptions <a name="OceanEcsLaunchSpecInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecInstanceMetadataOptions;

OceanEcsLaunchSpecInstanceMetadataOptions.builder()
    .httpTokens(java.lang.String)
//  .httpPutResponseHopLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#http_tokens OceanEcsLaunchSpec#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#http_put_response_hop_limit OceanEcsLaunchSpec#http_put_response_hop_limit}. |

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#http_tokens OceanEcsLaunchSpec#http_tokens}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#http_put_response_hop_limit OceanEcsLaunchSpec#http_put_response_hop_limit}.

---

### OceanEcsLaunchSpecSchedulingTask <a name="OceanEcsLaunchSpecSchedulingTask" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecSchedulingTask;

OceanEcsLaunchSpecSchedulingTask.builder()
    .cronExpression(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .taskType(java.lang.String)
//  .taskHeadroom(IResolvable)
//  .taskHeadroom(java.util.List<OceanEcsLaunchSpecSchedulingTaskTaskHeadroom>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#cron_expression OceanEcsLaunchSpec#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#is_enabled OceanEcsLaunchSpec#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#task_type OceanEcsLaunchSpec#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.taskHeadroom">taskHeadroom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>></code> | task_headroom block. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#cron_expression OceanEcsLaunchSpec#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#is_enabled OceanEcsLaunchSpec#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#task_type OceanEcsLaunchSpec#task_type}.

---

##### `taskHeadroom`<sup>Optional</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask.property.taskHeadroom"></a>

```java
public java.lang.Object getTaskHeadroom();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>>

task_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#task_headroom OceanEcsLaunchSpec#task_headroom}

---

### OceanEcsLaunchSpecSchedulingTaskTaskHeadroom <a name="OceanEcsLaunchSpecSchedulingTaskTaskHeadroom" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom;

OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.builder()
    .numOfUnits(java.lang.Number)
//  .cpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#num_of_units OceanEcsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#cpu_per_unit OceanEcsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#memory_per_unit OceanEcsLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#num_of_units OceanEcsLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#cpu_per_unit OceanEcsLaunchSpec#cpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#memory_per_unit OceanEcsLaunchSpec#memory_per_unit}.

---

### OceanEcsLaunchSpecStrategy <a name="OceanEcsLaunchSpecStrategy" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecStrategy;

OceanEcsLaunchSpecStrategy.builder()
//  .spotPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#spot_percentage OceanEcsLaunchSpec#spot_percentage}. |

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#spot_percentage OceanEcsLaunchSpec#spot_percentage}.

---

### OceanEcsLaunchSpecTags <a name="OceanEcsLaunchSpecTags" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecTags;

OceanEcsLaunchSpecTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#key OceanEcsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#value OceanEcsLaunchSpec#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#key OceanEcsLaunchSpec#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.179.0/docs/resources/ocean_ecs_launch_spec#value OceanEcsLaunchSpec#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanEcsLaunchSpecAttributesList <a name="OceanEcsLaunchSpecAttributesList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecAttributesList;

new OceanEcsLaunchSpecAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.get"></a>

```java
public OceanEcsLaunchSpecAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>>

---


### OceanEcsLaunchSpecAttributesOutputReference <a name="OceanEcsLaunchSpecAttributesOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecAttributesOutputReference;

new OceanEcsLaunchSpecAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAttributes">OceanEcsLaunchSpecAttributes</a>

---


### OceanEcsLaunchSpecAutoscaleHeadroomsList <a name="OceanEcsLaunchSpecAutoscaleHeadroomsList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecAutoscaleHeadroomsList;

new OceanEcsLaunchSpecAutoscaleHeadroomsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.get"></a>

```java
public OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>>

---


### OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference <a name="OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference;

new OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecAutoscaleHeadrooms">OceanEcsLaunchSpecAutoscaleHeadrooms</a>

---


### OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference;

new OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">baseSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">sizePerResourceUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">baseSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseSizeInput`<sup>Optional</sup> <a name="baseSizeInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```java
public java.lang.Number getBaseSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `sizePerResourceUnitInput`<sup>Optional</sup> <a name="sizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```java
public java.lang.Number getSizePerResourceUnitInput();
```

- *Type:* java.lang.Number

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```java
public java.lang.Number getBaseSize();
```

- *Type:* java.lang.Number

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```java
public java.lang.Number getSizePerResourceUnit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference <a name="OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference;

new OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">putDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">resetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicVolumeSize` <a name="putDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```java
public void putDynamicVolumeSize(OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetDynamicVolumeSize` <a name="resetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```java
public void resetDynamicVolumeSize()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">dynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs">OceanEcsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicVolumeSize`<sup>Required</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference getDynamicVolumeSize();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicVolumeSizeInput`<sup>Optional</sup> <a name="dynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize getDynamicVolumeSizeInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs">OceanEcsLaunchSpecBlockDeviceMappingsEbs</a>

---


### OceanEcsLaunchSpecBlockDeviceMappingsList <a name="OceanEcsLaunchSpecBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecBlockDeviceMappingsList;

new OceanEcsLaunchSpecBlockDeviceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.get"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>>

---


### OceanEcsLaunchSpecBlockDeviceMappingsOutputReference <a name="OceanEcsLaunchSpecBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference;

new OceanEcsLaunchSpecBlockDeviceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.putEbs"></a>

```java
public void putEbs(OceanEcsLaunchSpecBlockDeviceMappingsEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs">OceanEcsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs">OceanEcsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanEcsLaunchSpecBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```java
public OceanEcsLaunchSpecBlockDeviceMappingsEbs getEbsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsEbs">OceanEcsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```java
public java.lang.String getNoDeviceInput();
```

- *Type:* java.lang.String

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecBlockDeviceMappings">OceanEcsLaunchSpecBlockDeviceMappings</a>

---


### OceanEcsLaunchSpecImagesList <a name="OceanEcsLaunchSpecImagesList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecImagesList;

new OceanEcsLaunchSpecImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.get"></a>

```java
public OceanEcsLaunchSpecImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>>

---


### OceanEcsLaunchSpecImagesOutputReference <a name="OceanEcsLaunchSpecImagesOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecImagesOutputReference;

new OceanEcsLaunchSpecImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.resetImageId">resetImageId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.resetImageId"></a>

```java
public void resetImageId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecImages">OceanEcsLaunchSpecImages</a>

---


### OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference <a name="OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference;

new OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```java
public void resetHttpPutResponseHopLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```java
public java.lang.Number getHttpPutResponseHopLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```java
public java.lang.String getHttpTokensInput();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```java
public OceanEcsLaunchSpecInstanceMetadataOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecInstanceMetadataOptions">OceanEcsLaunchSpecInstanceMetadataOptions</a>

---


### OceanEcsLaunchSpecSchedulingTaskList <a name="OceanEcsLaunchSpecSchedulingTaskList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecSchedulingTaskList;

new OceanEcsLaunchSpecSchedulingTaskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.get"></a>

```java
public OceanEcsLaunchSpecSchedulingTaskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>>

---


### OceanEcsLaunchSpecSchedulingTaskOutputReference <a name="OceanEcsLaunchSpecSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecSchedulingTaskOutputReference;

new OceanEcsLaunchSpecSchedulingTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom">putTaskHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom">resetTaskHeadroom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaskHeadroom` <a name="putTaskHeadroom" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom"></a>

```java
public void putTaskHeadroom(IResolvable OR java.util.List<OceanEcsLaunchSpecSchedulingTaskTaskHeadroom> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>>

---

##### `resetTaskHeadroom` <a name="resetTaskHeadroom" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom"></a>

```java
public void resetTaskHeadroom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom">taskHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList">OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput">taskHeadroomInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `taskHeadroom`<sup>Required</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom"></a>

```java
public OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList getTaskHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList">OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskHeadroomInput`<sup>Optional</sup> <a name="taskHeadroomInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput"></a>

```java
public java.lang.Object getTaskHeadroomInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>>

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTask">OceanEcsLaunchSpecSchedulingTask</a>

---


### OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList <a name="OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList;

new OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.get"></a>

```java
public OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>>

---


### OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference <a name="OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference;

new OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecSchedulingTaskTaskHeadroom">OceanEcsLaunchSpecSchedulingTaskTaskHeadroom</a>

---


### OceanEcsLaunchSpecStrategyList <a name="OceanEcsLaunchSpecStrategyList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecStrategyList;

new OceanEcsLaunchSpecStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.get"></a>

```java
public OceanEcsLaunchSpecStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>>

---


### OceanEcsLaunchSpecStrategyOutputReference <a name="OceanEcsLaunchSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecStrategyOutputReference;

new OceanEcsLaunchSpecStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.resetSpotPercentage"></a>

```java
public void resetSpotPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.spotPercentageInput">spotPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.spotPercentageInput"></a>

```java
public java.lang.Number getSpotPercentageInput();
```

- *Type:* java.lang.Number

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecStrategy">OceanEcsLaunchSpecStrategy</a>

---


### OceanEcsLaunchSpecTagsList <a name="OceanEcsLaunchSpecTagsList" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecTagsList;

new OceanEcsLaunchSpecTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.get"></a>

```java
public OceanEcsLaunchSpecTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>>

---


### OceanEcsLaunchSpecTagsOutputReference <a name="OceanEcsLaunchSpecTagsOutputReference" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs_launch_spec.OceanEcsLaunchSpecTagsOutputReference;

new OceanEcsLaunchSpecTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcsLaunchSpec.OceanEcsLaunchSpecTags">OceanEcsLaunchSpecTags</a>

---



