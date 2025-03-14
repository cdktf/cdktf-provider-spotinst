# `oceanEcs` Submodule <a name="`oceanEcs` Submodule" id="@cdktf/provider-spotinst.oceanEcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanEcs <a name="OceanEcs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs spotinst_ocean_ecs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcs;

OceanEcs.Builder.create(Construct scope, java.lang.String id)
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
    .clusterName(java.lang.String)
    .imageId(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
//  .associatePublicIpAddress(java.lang.Boolean)
//  .associatePublicIpAddress(IResolvable)
//  .autoscaler(OceanEcsAutoscaler)
//  .blacklist(java.util.List<java.lang.String>)
//  .blockDeviceMappings(IResolvable)
//  .blockDeviceMappings(java.util.List<OceanEcsBlockDeviceMappings>)
//  .clusterOrientation(IResolvable)
//  .clusterOrientation(java.util.List<OceanEcsClusterOrientation>)
//  .desiredCapacity(java.lang.Number)
//  .drainingTimeout(java.lang.Number)
//  .ebsOptimized(java.lang.Boolean)
//  .ebsOptimized(IResolvable)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .filters(OceanEcsFilters)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .instanceMetadataOptions(OceanEcsInstanceMetadataOptions)
//  .keyPair(java.lang.String)
//  .logging(OceanEcsLogging)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .monitoring(java.lang.Boolean)
//  .monitoring(IResolvable)
//  .optimizeImages(OceanEcsOptimizeImages)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<OceanEcsScheduledTask>)
//  .spotPercentage(java.lang.Number)
//  .tags(IResolvable)
//  .tags(java.util.List<OceanEcsTags>)
//  .updatePolicy(OceanEcsUpdatePolicy)
//  .useAsTemplateOnly(java.lang.Boolean)
//  .useAsTemplateOnly(IResolvable)
//  .userData(java.lang.String)
//  .utilizeCommitments(java.lang.Boolean)
//  .utilizeCommitments(IResolvable)
//  .utilizeReservedInstances(java.lang.Boolean)
//  .utilizeReservedInstances(IResolvable)
//  .whitelist(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#name OceanEcs#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#region OceanEcs#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blacklist">blacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blockDeviceMappings">blockDeviceMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>></code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterOrientation">clusterOrientation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>></code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#fallback_to_ondemand OceanEcs#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#id OceanEcs#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.optimizeImages">optimizeImages</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | optimize_images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeCommitments">utilizeCommitments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeReservedInstances">utilizeReservedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#name OceanEcs#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#region OceanEcs#region}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.autoscaler"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#autoscaler OceanEcs#autoscaler}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blacklist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}.

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>>

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#block_device_mappings OceanEcs#block_device_mappings}

---

##### `clusterOrientation`<sup>Optional</sup> <a name="clusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterOrientation"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>>

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cluster_orientation OceanEcs#cluster_orientation}

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.desiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}.

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.drainingTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.ebsOptimized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#fallback_to_ondemand OceanEcs#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#filters OceanEcs#filters}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.instanceMetadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#instance_metadata_options OceanEcs#instance_metadata_options}

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.keyPair"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#logging OceanEcs#logging}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.monitoring"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}.

---

##### `optimizeImages`<sup>Optional</sup> <a name="optimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.optimizeImages"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

optimize_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#optimize_images OceanEcs#optimize_images}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scheduledTask"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#scheduled_task OceanEcs#scheduled_task}

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.spotPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#tags OceanEcs#tags}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#update_policy OceanEcs#update_policy}

---

##### `useAsTemplateOnly`<sup>Optional</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.useAsTemplateOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}.

---

##### `utilizeCommitments`<sup>Optional</sup> <a name="utilizeCommitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeCommitments"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}.

---

##### `utilizeReservedInstances`<sup>Optional</sup> <a name="utilizeReservedInstances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeReservedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.whitelist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler">putAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation">putClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions">putInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages">putOptimizeImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAutoscaler">resetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlacklist">resetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetClusterOrientation">resetClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetInstanceMetadataOptions">resetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOptimizeImages">resetOptimizeImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUseAsTemplateOnly">resetUseAsTemplateOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeCommitments">resetUtilizeCommitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeReservedInstances">resetUtilizeReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaler` <a name="putAutoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler"></a>

```java
public void putAutoscaler(OceanEcsAutoscaler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings"></a>

```java
public void putBlockDeviceMappings(IResolvable OR java.util.List<OceanEcsBlockDeviceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>>

---

##### `putClusterOrientation` <a name="putClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation"></a>

```java
public void putClusterOrientation(IResolvable OR java.util.List<OceanEcsClusterOrientation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>>

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters"></a>

```java
public void putFilters(OceanEcsFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---

##### `putInstanceMetadataOptions` <a name="putInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions"></a>

```java
public void putInstanceMetadataOptions(OceanEcsInstanceMetadataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging"></a>

```java
public void putLogging(OceanEcsLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---

##### `putOptimizeImages` <a name="putOptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages"></a>

```java
public void putOptimizeImages(OceanEcsOptimizeImages value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask"></a>

```java
public void putScheduledTask(IResolvable OR java.util.List<OceanEcsScheduledTask> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<OceanEcsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy"></a>

```java
public void putUpdatePolicy(OceanEcsUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAssociatePublicIpAddress"></a>

```java
public void resetAssociatePublicIpAddress()
```

##### `resetAutoscaler` <a name="resetAutoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAutoscaler"></a>

```java
public void resetAutoscaler()
```

##### `resetBlacklist` <a name="resetBlacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlacklist"></a>

```java
public void resetBlacklist()
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlockDeviceMappings"></a>

```java
public void resetBlockDeviceMappings()
```

##### `resetClusterOrientation` <a name="resetClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetClusterOrientation"></a>

```java
public void resetClusterOrientation()
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDesiredCapacity"></a>

```java
public void resetDesiredCapacity()
```

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDrainingTimeout"></a>

```java
public void resetDrainingTimeout()
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetEbsOptimized"></a>

```java
public void resetEbsOptimized()
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFallbackToOndemand"></a>

```java
public void resetFallbackToOndemand()
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetIamInstanceProfile"></a>

```java
public void resetIamInstanceProfile()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceMetadataOptions` <a name="resetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetInstanceMetadataOptions"></a>

```java
public void resetInstanceMetadataOptions()
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetKeyPair"></a>

```java
public void resetKeyPair()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetOptimizeImages` <a name="resetOptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOptimizeImages"></a>

```java
public void resetOptimizeImages()
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetScheduledTask"></a>

```java
public void resetScheduledTask()
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetSpotPercentage"></a>

```java
public void resetSpotPercentage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetTags"></a>

```java
public void resetTags()
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUpdatePolicy"></a>

```java
public void resetUpdatePolicy()
```

##### `resetUseAsTemplateOnly` <a name="resetUseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUseAsTemplateOnly"></a>

```java
public void resetUseAsTemplateOnly()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetUtilizeCommitments` <a name="resetUtilizeCommitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeCommitments"></a>

```java
public void resetUtilizeCommitments()
```

##### `resetUtilizeReservedInstances` <a name="resetUtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeReservedInstances"></a>

```java
public void resetUtilizeReservedInstances()
```

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetWhitelist"></a>

```java
public void resetWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanEcs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcs;

OceanEcs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcs;

OceanEcs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcs;

OceanEcs.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcs;

OceanEcs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanEcs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanEcs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanEcs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanEcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanEcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference">OceanEcsAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList">OceanEcsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientation">clusterOrientation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList">OceanEcsClusterOrientationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference">OceanEcsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference">OceanEcsInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference">OceanEcsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImages">optimizeImages</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference">OceanEcsOptimizeImagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList">OceanEcsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList">OceanEcsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference">OceanEcsUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscalerInput">autoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklistInput">blacklistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientationInput">clusterOrientationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptionsInput">instanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPairInput">keyPairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoringInput">monitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImagesInput">optimizeImagesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentageInput">spotPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnlyInput">useAsTemplateOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitmentsInput">utilizeCommitmentsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstancesInput">utilizeReservedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelistInput">whitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklist">blacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitments">utilizeCommitments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstances">utilizeReservedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscaler"></a>

```java
public OceanEcsAutoscalerOutputReference getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference">OceanEcsAutoscalerOutputReference</a>

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappings"></a>

```java
public OceanEcsBlockDeviceMappingsList getBlockDeviceMappings();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList">OceanEcsBlockDeviceMappingsList</a>

---

##### `clusterOrientation`<sup>Required</sup> <a name="clusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientation"></a>

```java
public OceanEcsClusterOrientationList getClusterOrientation();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList">OceanEcsClusterOrientationList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filters"></a>

```java
public OceanEcsFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference">OceanEcsFiltersOutputReference</a>

---

##### `instanceMetadataOptions`<sup>Required</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptions"></a>

```java
public OceanEcsInstanceMetadataOptionsOutputReference getInstanceMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference">OceanEcsInstanceMetadataOptionsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.logging"></a>

```java
public OceanEcsLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference">OceanEcsLoggingOutputReference</a>

---

##### `optimizeImages`<sup>Required</sup> <a name="optimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImages"></a>

```java
public OceanEcsOptimizeImagesOutputReference getOptimizeImages();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference">OceanEcsOptimizeImagesOutputReference</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTask"></a>

```java
public OceanEcsScheduledTaskList getScheduledTask();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList">OceanEcsScheduledTaskList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tags"></a>

```java
public OceanEcsTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList">OceanEcsTagsList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicy"></a>

```java
public OceanEcsUpdatePolicyOutputReference getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference">OceanEcsUpdatePolicyOutputReference</a>

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddressInput"></a>

```java
public java.lang.Object getAssociatePublicIpAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoscalerInput`<sup>Optional</sup> <a name="autoscalerInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscalerInput"></a>

```java
public OceanEcsAutoscaler getAutoscalerInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---

##### `blacklistInput`<sup>Optional</sup> <a name="blacklistInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklistInput"></a>

```java
public java.util.List<java.lang.String> getBlacklistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappingsInput"></a>

```java
public java.lang.Object getBlockDeviceMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `clusterOrientationInput`<sup>Optional</sup> <a name="clusterOrientationInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientationInput"></a>

```java
public java.lang.Object getClusterOrientationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>>

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeoutInput"></a>

```java
public java.lang.Number getDrainingTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimizedInput"></a>

```java
public java.lang.Object getEbsOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fallbackToOndemandInput"></a>

```java
public java.lang.Object getFallbackToOndemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filtersInput"></a>

```java
public OceanEcsFilters getFiltersInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfileInput"></a>

```java
public java.lang.String getIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `instanceMetadataOptionsInput`<sup>Optional</sup> <a name="instanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptionsInput"></a>

```java
public OceanEcsInstanceMetadataOptions getInstanceMetadataOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPairInput"></a>

```java
public java.lang.String getKeyPairInput();
```

- *Type:* java.lang.String

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.loggingInput"></a>

```java
public OceanEcsLogging getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoringInput"></a>

```java
public java.lang.Object getMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optimizeImagesInput`<sup>Optional</sup> <a name="optimizeImagesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImagesInput"></a>

```java
public OceanEcsOptimizeImages getOptimizeImagesInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTaskInput"></a>

```java
public java.lang.Object getScheduledTaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentageInput"></a>

```java
public java.lang.Number getSpotPercentageInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>>

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicyInput"></a>

```java
public OceanEcsUpdatePolicy getUpdatePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---

##### `useAsTemplateOnlyInput`<sup>Optional</sup> <a name="useAsTemplateOnlyInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnlyInput"></a>

```java
public java.lang.Object getUseAsTemplateOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `utilizeCommitmentsInput`<sup>Optional</sup> <a name="utilizeCommitmentsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitmentsInput"></a>

```java
public java.lang.Object getUtilizeCommitmentsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `utilizeReservedInstancesInput`<sup>Optional</sup> <a name="utilizeReservedInstancesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstancesInput"></a>

```java
public java.lang.Object getUtilizeReservedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelistInput"></a>

```java
public java.util.List<java.lang.String> getWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklist"></a>

```java
public java.util.List<java.lang.String> getBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useAsTemplateOnly`<sup>Required</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnly"></a>

```java
public java.lang.Object getUseAsTemplateOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `utilizeCommitments`<sup>Required</sup> <a name="utilizeCommitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitments"></a>

```java
public java.lang.Object getUtilizeCommitments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `utilizeReservedInstances`<sup>Required</sup> <a name="utilizeReservedInstances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstances"></a>

```java
public java.lang.Object getUtilizeReservedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelist"></a>

```java
public java.util.List<java.lang.String> getWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanEcsAutoscaler <a name="OceanEcsAutoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscaler;

OceanEcsAutoscaler.builder()
//  .autoHeadroomPercentage(java.lang.Number)
//  .cooldown(java.lang.Number)
//  .down(OceanEcsAutoscalerDown)
//  .enableAutomaticAndManualHeadroom(java.lang.Boolean)
//  .enableAutomaticAndManualHeadroom(IResolvable)
//  .headroom(OceanEcsAutoscalerHeadroom)
//  .isAutoConfig(java.lang.Boolean)
//  .isAutoConfig(IResolvable)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .resourceLimits(OceanEcsAutoscalerResourceLimits)
//  .shouldScaleDownNonServiceTasks(java.lang.Boolean)
//  .shouldScaleDownNonServiceTasks(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#auto_headroom_percentage OceanEcs#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cooldown OceanEcs#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#enable_automatic_and_manual_headroom OceanEcs#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isAutoConfig">isAutoConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_auto_config OceanEcs#is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.shouldScaleDownNonServiceTasks">shouldScaleDownNonServiceTasks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#should_scale_down_non_service_tasks OceanEcs#should_scale_down_non_service_tasks}. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.autoHeadroomPercentage"></a>

```java
public java.lang.Number getAutoHeadroomPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#auto_headroom_percentage OceanEcs#auto_headroom_percentage}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cooldown OceanEcs#cooldown}.

---

##### `down`<sup>Optional</sup> <a name="down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.down"></a>

```java
public OceanEcsAutoscalerDown getDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#down OceanEcs#down}

---

##### `enableAutomaticAndManualHeadroom`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```java
public java.lang.Object getEnableAutomaticAndManualHeadroom();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#enable_automatic_and_manual_headroom OceanEcs#enable_automatic_and_manual_headroom}.

---

##### `headroom`<sup>Optional</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.headroom"></a>

```java
public OceanEcsAutoscalerHeadroom getHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#headroom OceanEcs#headroom}

---

##### `isAutoConfig`<sup>Optional</sup> <a name="isAutoConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isAutoConfig"></a>

```java
public java.lang.Object getIsAutoConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_auto_config OceanEcs#is_auto_config}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.resourceLimits"></a>

```java
public OceanEcsAutoscalerResourceLimits getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#resource_limits OceanEcs#resource_limits}

---

##### `shouldScaleDownNonServiceTasks`<sup>Optional</sup> <a name="shouldScaleDownNonServiceTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.shouldScaleDownNonServiceTasks"></a>

```java
public java.lang.Object getShouldScaleDownNonServiceTasks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#should_scale_down_non_service_tasks OceanEcs#should_scale_down_non_service_tasks}.

---

### OceanEcsAutoscalerDown <a name="OceanEcsAutoscalerDown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscalerDown;

OceanEcsAutoscalerDown.builder()
//  .maxScaleDownPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_scale_down_percentage OceanEcs#max_scale_down_percentage}. |

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_scale_down_percentage OceanEcs#max_scale_down_percentage}.

---

### OceanEcsAutoscalerHeadroom <a name="OceanEcsAutoscalerHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscalerHeadroom;

OceanEcsAutoscalerHeadroom.builder()
//  .cpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
//  .numOfUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cpu_per_unit OceanEcs#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#memory_per_unit OceanEcs#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#num_of_units OceanEcs#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cpu_per_unit OceanEcs#cpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#memory_per_unit OceanEcs#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#num_of_units OceanEcs#num_of_units}.

---

### OceanEcsAutoscalerResourceLimits <a name="OceanEcsAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscalerResourceLimits;

OceanEcsAutoscalerResourceLimits.builder()
//  .maxMemoryGib(java.lang.Number)
//  .maxVcpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}. |

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

### OceanEcsBlockDeviceMappings <a name="OceanEcsBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsBlockDeviceMappings;

OceanEcsBlockDeviceMappings.builder()
    .deviceName(java.lang.String)
//  .ebs(OceanEcsBlockDeviceMappingsEbs)
//  .noDevice(java.lang.String)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#device_name OceanEcs#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#no_device OceanEcs#no_device}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#virtual_name OceanEcs#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#device_name OceanEcs#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.ebs"></a>

```java
public OceanEcsBlockDeviceMappingsEbs getEbs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#ebs OceanEcs#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#no_device OceanEcs#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#virtual_name OceanEcs#virtual_name}.

---

### OceanEcsBlockDeviceMappingsEbs <a name="OceanEcsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsBlockDeviceMappingsEbs;

OceanEcsBlockDeviceMappingsEbs.builder()
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .dynamicVolumeSize(OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize)
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
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#delete_on_termination OceanEcs#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#encrypted OceanEcs#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#iops OceanEcs#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#kms_key_id OceanEcs#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#snapshot_id OceanEcs#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#throughput OceanEcs#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#volume_size OceanEcs#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#volume_type OceanEcs#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#delete_on_termination OceanEcs#delete_on_termination}.

---

##### `dynamicVolumeSize`<sup>Optional</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```java
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize getDynamicVolumeSize();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#dynamic_volume_size OceanEcs#dynamic_volume_size}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#encrypted OceanEcs#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#iops OceanEcs#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#kms_key_id OceanEcs#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#snapshot_id OceanEcs#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#throughput OceanEcs#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#volume_size OceanEcs#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#volume_type OceanEcs#volume_type}.

---

### OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize;

OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.builder()
    .baseSize(java.lang.Number)
    .resource(java.lang.String)
    .sizePerResourceUnit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">baseSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#base_size OceanEcs#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">resource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#resource OceanEcs#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#size_per_resource_unit OceanEcs#size_per_resource_unit}. |

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```java
public java.lang.Number getBaseSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#base_size OceanEcs#base_size}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#resource OceanEcs#resource}.

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```java
public java.lang.Number getSizePerResourceUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#size_per_resource_unit OceanEcs#size_per_resource_unit}.

---

### OceanEcsClusterOrientation <a name="OceanEcsClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsClusterOrientation;

OceanEcsClusterOrientation.builder()
//  .availabilityVsCost(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.property.availabilityVsCost">availabilityVsCost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#availability_vs_cost OceanEcs#availability_vs_cost}. |

---

##### `availabilityVsCost`<sup>Optional</sup> <a name="availabilityVsCost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.property.availabilityVsCost"></a>

```java
public java.lang.String getAvailabilityVsCost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#availability_vs_cost OceanEcs#availability_vs_cost}.

---

### OceanEcsConfig <a name="OceanEcsConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsConfig;

OceanEcsConfig.builder()
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
    .clusterName(java.lang.String)
    .imageId(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
//  .associatePublicIpAddress(java.lang.Boolean)
//  .associatePublicIpAddress(IResolvable)
//  .autoscaler(OceanEcsAutoscaler)
//  .blacklist(java.util.List<java.lang.String>)
//  .blockDeviceMappings(IResolvable)
//  .blockDeviceMappings(java.util.List<OceanEcsBlockDeviceMappings>)
//  .clusterOrientation(IResolvable)
//  .clusterOrientation(java.util.List<OceanEcsClusterOrientation>)
//  .desiredCapacity(java.lang.Number)
//  .drainingTimeout(java.lang.Number)
//  .ebsOptimized(java.lang.Boolean)
//  .ebsOptimized(IResolvable)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .filters(OceanEcsFilters)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .instanceMetadataOptions(OceanEcsInstanceMetadataOptions)
//  .keyPair(java.lang.String)
//  .logging(OceanEcsLogging)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .monitoring(java.lang.Boolean)
//  .monitoring(IResolvable)
//  .optimizeImages(OceanEcsOptimizeImages)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<OceanEcsScheduledTask>)
//  .spotPercentage(java.lang.Number)
//  .tags(IResolvable)
//  .tags(java.util.List<OceanEcsTags>)
//  .updatePolicy(OceanEcsUpdatePolicy)
//  .useAsTemplateOnly(java.lang.Boolean)
//  .useAsTemplateOnly(IResolvable)
//  .userData(java.lang.String)
//  .utilizeCommitments(java.lang.Boolean)
//  .utilizeCommitments(IResolvable)
//  .utilizeReservedInstances(java.lang.Boolean)
//  .utilizeReservedInstances(IResolvable)
//  .whitelist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#name OceanEcs#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#region OceanEcs#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blacklist">blacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>></code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterOrientation">clusterOrientation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>></code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#fallback_to_ondemand OceanEcs#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#id OceanEcs#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.optimizeImages">optimizeImages</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | optimize_images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeCommitments">utilizeCommitments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeReservedInstances">utilizeReservedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#name OceanEcs#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#region OceanEcs#region}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.autoscaler"></a>

```java
public OceanEcsAutoscaler getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#autoscaler OceanEcs#autoscaler}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blacklist"></a>

```java
public java.util.List<java.lang.String> getBlacklist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}.

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blockDeviceMappings"></a>

```java
public java.lang.Object getBlockDeviceMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>>

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#block_device_mappings OceanEcs#block_device_mappings}

---

##### `clusterOrientation`<sup>Optional</sup> <a name="clusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterOrientation"></a>

```java
public java.lang.Object getClusterOrientation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>>

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cluster_orientation OceanEcs#cluster_orientation}

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}.

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#fallback_to_ondemand OceanEcs#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.filters"></a>

```java
public OceanEcsFilters getFilters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#filters OceanEcs#filters}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.instanceMetadataOptions"></a>

```java
public OceanEcsInstanceMetadataOptions getInstanceMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#instance_metadata_options OceanEcs#instance_metadata_options}

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.logging"></a>

```java
public OceanEcsLogging getLogging();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#logging OceanEcs#logging}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}.

---

##### `optimizeImages`<sup>Optional</sup> <a name="optimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.optimizeImages"></a>

```java
public OceanEcsOptimizeImages getOptimizeImages();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

optimize_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#optimize_images OceanEcs#optimize_images}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.scheduledTask"></a>

```java
public java.lang.Object getScheduledTask();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#scheduled_task OceanEcs#scheduled_task}

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#tags OceanEcs#tags}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.updatePolicy"></a>

```java
public OceanEcsUpdatePolicy getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#update_policy OceanEcs#update_policy}

---

##### `useAsTemplateOnly`<sup>Optional</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.useAsTemplateOnly"></a>

```java
public java.lang.Object getUseAsTemplateOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}.

---

##### `utilizeCommitments`<sup>Optional</sup> <a name="utilizeCommitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeCommitments"></a>

```java
public java.lang.Object getUtilizeCommitments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}.

---

##### `utilizeReservedInstances`<sup>Optional</sup> <a name="utilizeReservedInstances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeReservedInstances"></a>

```java
public java.lang.Object getUtilizeReservedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.whitelist"></a>

```java
public java.util.List<java.lang.String> getWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}.

---

### OceanEcsFilters <a name="OceanEcsFilters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsFilters;

OceanEcsFilters.builder()
//  .architectures(java.util.List<java.lang.String>)
//  .categories(java.util.List<java.lang.String>)
//  .diskTypes(java.util.List<java.lang.String>)
//  .excludeFamilies(java.util.List<java.lang.String>)
//  .excludeMetal(java.lang.Boolean)
//  .excludeMetal(IResolvable)
//  .hypervisor(java.util.List<java.lang.String>)
//  .includeFamilies(java.util.List<java.lang.String>)
//  .isEnaSupported(java.lang.String)
//  .maxGpu(java.lang.Number)
//  .maxMemoryGib(java.lang.Number)
//  .maxNetworkPerformance(java.lang.Number)
//  .maxVcpu(java.lang.Number)
//  .minEnis(java.lang.Number)
//  .minGpu(java.lang.Number)
//  .minMemoryGib(java.lang.Number)
//  .minNetworkPerformance(java.lang.Number)
//  .minVcpu(java.lang.Number)
//  .rootDeviceTypes(java.util.List<java.lang.String>)
//  .virtualizationTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#architectures OceanEcs#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#categories OceanEcs#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.diskTypes">diskTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#disk_types OceanEcs#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeFamilies">excludeFamilies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#exclude_families OceanEcs#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeMetal">excludeMetal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#exclude_metal OceanEcs#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.hypervisor">hypervisor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#hypervisor OceanEcs#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.includeFamilies">includeFamilies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#include_families OceanEcs#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.isEnaSupported">isEnaSupported</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_ena_supported OceanEcs#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxGpu">maxGpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_gpu OceanEcs#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxNetworkPerformance">maxNetworkPerformance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_network_performance OceanEcs#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minEnis">minEnis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_enis OceanEcs#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minGpu">minGpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_gpu OceanEcs#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minMemoryGib">minMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_memory_gib OceanEcs#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minNetworkPerformance">minNetworkPerformance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_network_performance OceanEcs#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minVcpu">minVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_vcpu OceanEcs#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.rootDeviceTypes">rootDeviceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#root_device_types OceanEcs#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.virtualizationTypes">virtualizationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#virtualization_types OceanEcs#virtualization_types}. |

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#architectures OceanEcs#architectures}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#categories OceanEcs#categories}.

---

##### `diskTypes`<sup>Optional</sup> <a name="diskTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.diskTypes"></a>

```java
public java.util.List<java.lang.String> getDiskTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#disk_types OceanEcs#disk_types}.

---

##### `excludeFamilies`<sup>Optional</sup> <a name="excludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeFamilies"></a>

```java
public java.util.List<java.lang.String> getExcludeFamilies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#exclude_families OceanEcs#exclude_families}.

---

##### `excludeMetal`<sup>Optional</sup> <a name="excludeMetal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeMetal"></a>

```java
public java.lang.Object getExcludeMetal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#exclude_metal OceanEcs#exclude_metal}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.hypervisor"></a>

```java
public java.util.List<java.lang.String> getHypervisor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#hypervisor OceanEcs#hypervisor}.

---

##### `includeFamilies`<sup>Optional</sup> <a name="includeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.includeFamilies"></a>

```java
public java.util.List<java.lang.String> getIncludeFamilies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#include_families OceanEcs#include_families}.

---

##### `isEnaSupported`<sup>Optional</sup> <a name="isEnaSupported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.isEnaSupported"></a>

```java
public java.lang.String getIsEnaSupported();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_ena_supported OceanEcs#is_ena_supported}.

---

##### `maxGpu`<sup>Optional</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxGpu"></a>

```java
public java.lang.Number getMaxGpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_gpu OceanEcs#max_gpu}.

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

##### `maxNetworkPerformance`<sup>Optional</sup> <a name="maxNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxNetworkPerformance"></a>

```java
public java.lang.Number getMaxNetworkPerformance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_network_performance OceanEcs#max_network_performance}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

##### `minEnis`<sup>Optional</sup> <a name="minEnis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minEnis"></a>

```java
public java.lang.Number getMinEnis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_enis OceanEcs#min_enis}.

---

##### `minGpu`<sup>Optional</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minGpu"></a>

```java
public java.lang.Number getMinGpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_gpu OceanEcs#min_gpu}.

---

##### `minMemoryGib`<sup>Optional</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minMemoryGib"></a>

```java
public java.lang.Number getMinMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_memory_gib OceanEcs#min_memory_gib}.

---

##### `minNetworkPerformance`<sup>Optional</sup> <a name="minNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minNetworkPerformance"></a>

```java
public java.lang.Number getMinNetworkPerformance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_network_performance OceanEcs#min_network_performance}.

---

##### `minVcpu`<sup>Optional</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minVcpu"></a>

```java
public java.lang.Number getMinVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#min_vcpu OceanEcs#min_vcpu}.

---

##### `rootDeviceTypes`<sup>Optional</sup> <a name="rootDeviceTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.rootDeviceTypes"></a>

```java
public java.util.List<java.lang.String> getRootDeviceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#root_device_types OceanEcs#root_device_types}.

---

##### `virtualizationTypes`<sup>Optional</sup> <a name="virtualizationTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.virtualizationTypes"></a>

```java
public java.util.List<java.lang.String> getVirtualizationTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#virtualization_types OceanEcs#virtualization_types}.

---

### OceanEcsInstanceMetadataOptions <a name="OceanEcsInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsInstanceMetadataOptions;

OceanEcsInstanceMetadataOptions.builder()
    .httpTokens(java.lang.String)
//  .httpPutResponseHopLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#http_tokens OceanEcs#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#http_put_response_hop_limit OceanEcs#http_put_response_hop_limit}. |

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#http_tokens OceanEcs#http_tokens}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#http_put_response_hop_limit OceanEcs#http_put_response_hop_limit}.

---

### OceanEcsLogging <a name="OceanEcsLogging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsLogging;

OceanEcsLogging.builder()
//  .export(OceanEcsLoggingExport)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | export block. |

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.property.export"></a>

```java
public OceanEcsLoggingExport getExport();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#export OceanEcs#export}

---

### OceanEcsLoggingExport <a name="OceanEcsLoggingExport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsLoggingExport;

OceanEcsLoggingExport.builder()
//  .s3(IResolvable)
//  .s3(java.util.List<OceanEcsLoggingExportS3>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.property.s3">s3</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>></code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.property.s3"></a>

```java
public java.lang.Object getS3();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#s3 OceanEcs#s3}

---

### OceanEcsLoggingExportS3 <a name="OceanEcsLoggingExportS3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsLoggingExportS3;

OceanEcsLoggingExportS3.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#id OceanEcs#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanEcsOptimizeImages <a name="OceanEcsOptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsOptimizeImages;

OceanEcsOptimizeImages.builder()
    .performAt(java.lang.String)
    .shouldOptimizeEcsAmi(java.lang.Boolean)
    .shouldOptimizeEcsAmi(IResolvable)
//  .timeWindows(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.performAt">performAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#perform_at OceanEcs#perform_at}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.shouldOptimizeEcsAmi">shouldOptimizeEcsAmi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#should_optimize_ecs_ami OceanEcs#should_optimize_ecs_ami}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}. |

---

##### `performAt`<sup>Required</sup> <a name="performAt" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.performAt"></a>

```java
public java.lang.String getPerformAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#perform_at OceanEcs#perform_at}.

---

##### `shouldOptimizeEcsAmi`<sup>Required</sup> <a name="shouldOptimizeEcsAmi" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.shouldOptimizeEcsAmi"></a>

```java
public java.lang.Object getShouldOptimizeEcsAmi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#should_optimize_ecs_ami OceanEcs#should_optimize_ecs_ami}.

---

##### `timeWindows`<sup>Optional</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

### OceanEcsScheduledTask <a name="OceanEcsScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTask;

OceanEcsScheduledTask.builder()
//  .shutdownHours(OceanEcsScheduledTaskShutdownHours)
//  .tasks(IResolvable)
//  .tasks(java.util.List<OceanEcsScheduledTaskTasks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.tasks">tasks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>></code> | tasks block. |

---

##### `shutdownHours`<sup>Optional</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.shutdownHours"></a>

```java
public OceanEcsScheduledTaskShutdownHours getShutdownHours();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#shutdown_hours OceanEcs#shutdown_hours}

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.tasks"></a>

```java
public java.lang.Object getTasks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#tasks OceanEcs#tasks}

---

### OceanEcsScheduledTaskShutdownHours <a name="OceanEcsScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTaskShutdownHours;

OceanEcsScheduledTaskShutdownHours.builder()
    .timeWindows(java.util.List<java.lang.String>)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

### OceanEcsScheduledTaskTasks <a name="OceanEcsScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTaskTasks;

OceanEcsScheduledTaskTasks.builder()
    .cronExpression(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .taskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cron_expression OceanEcs#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#task_type OceanEcs#task_type}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#cron_expression OceanEcs#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#task_type OceanEcs#task_type}.

---

### OceanEcsTags <a name="OceanEcsTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsTags;

OceanEcsTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#key OceanEcs#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#value OceanEcs#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#key OceanEcs#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#value OceanEcs#value}.

---

### OceanEcsUpdatePolicy <a name="OceanEcsUpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsUpdatePolicy;

OceanEcsUpdatePolicy.builder()
    .shouldRoll(java.lang.Boolean)
    .shouldRoll(IResolvable)
//  .autoApplyTags(java.lang.Boolean)
//  .autoApplyTags(IResolvable)
//  .conditionedRoll(java.lang.Boolean)
//  .conditionedRoll(IResolvable)
//  .rollConfig(OceanEcsUpdatePolicyRollConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#should_roll OceanEcs#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.autoApplyTags">autoApplyTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#auto_apply_tags OceanEcs#auto_apply_tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.conditionedRoll">conditionedRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#conditioned_roll OceanEcs#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#should_roll OceanEcs#should_roll}.

---

##### `autoApplyTags`<sup>Optional</sup> <a name="autoApplyTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.autoApplyTags"></a>

```java
public java.lang.Object getAutoApplyTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#auto_apply_tags OceanEcs#auto_apply_tags}.

---

##### `conditionedRoll`<sup>Optional</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.conditionedRoll"></a>

```java
public java.lang.Object getConditionedRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#conditioned_roll OceanEcs#conditioned_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.rollConfig"></a>

```java
public OceanEcsUpdatePolicyRollConfig getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#roll_config OceanEcs#roll_config}

---

### OceanEcsUpdatePolicyRollConfig <a name="OceanEcsUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsUpdatePolicyRollConfig;

OceanEcsUpdatePolicyRollConfig.builder()
    .batchSizePercentage(java.lang.Number)
//  .batchMinHealthyPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#batch_size_percentage OceanEcs#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#batch_min_healthy_percentage OceanEcs#batch_min_healthy_percentage}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#batch_size_percentage OceanEcs#batch_size_percentage}.

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.0/docs/resources/ocean_ecs#batch_min_healthy_percentage OceanEcs#batch_min_healthy_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanEcsAutoscalerDownOutputReference <a name="OceanEcsAutoscalerDownOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscalerDownOutputReference;

new OceanEcsAutoscalerDownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resetMaxScaleDownPercentage"></a>

```java
public void resetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentageInput"></a>

```java
public java.lang.Number getMaxScaleDownPercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.internalValue"></a>

```java
public OceanEcsAutoscalerDown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---


### OceanEcsAutoscalerHeadroomOutputReference <a name="OceanEcsAutoscalerHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscalerHeadroomOutputReference;

new OceanEcsAutoscalerHeadroomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetNumOfUnits"></a>

```java
public void resetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.internalValue"></a>

```java
public OceanEcsAutoscalerHeadroom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---


### OceanEcsAutoscalerOutputReference <a name="OceanEcsAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscalerOutputReference;

new OceanEcsAutoscalerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown">putDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom">putHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetDown">resetDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">resetEnableAutomaticAndManualHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetHeadroom">resetHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsAutoConfig">resetIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetShouldScaleDownNonServiceTasks">resetShouldScaleDownNonServiceTasks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDown` <a name="putDown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown"></a>

```java
public void putDown(OceanEcsAutoscalerDown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---

##### `putHeadroom` <a name="putHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom"></a>

```java
public void putHeadroom(OceanEcsAutoscalerHeadroom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits"></a>

```java
public void putResourceLimits(OceanEcsAutoscalerResourceLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```java
public void resetAutoHeadroomPercentage()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDown` <a name="resetDown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetDown"></a>

```java
public void resetDown()
```

##### `resetEnableAutomaticAndManualHeadroom` <a name="resetEnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```java
public void resetEnableAutomaticAndManualHeadroom()
```

##### `resetHeadroom` <a name="resetHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetHeadroom"></a>

```java
public void resetHeadroom()
```

##### `resetIsAutoConfig` <a name="resetIsAutoConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsAutoConfig"></a>

```java
public void resetIsAutoConfig()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetResourceLimits"></a>

```java
public void resetResourceLimits()
```

##### `resetShouldScaleDownNonServiceTasks` <a name="resetShouldScaleDownNonServiceTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetShouldScaleDownNonServiceTasks"></a>

```java
public void resetShouldScaleDownNonServiceTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference">OceanEcsAutoscalerDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference">OceanEcsAutoscalerHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference">OceanEcsAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.downInput">downInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">enableAutomaticAndManualHeadroomInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroomInput">headroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfigInput">isAutoConfigInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasksInput">shouldScaleDownNonServiceTasksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfig">isAutoConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasks">shouldScaleDownNonServiceTasks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `down`<sup>Required</sup> <a name="down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.down"></a>

```java
public OceanEcsAutoscalerDownOutputReference getDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference">OceanEcsAutoscalerDownOutputReference</a>

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroom"></a>

```java
public OceanEcsAutoscalerHeadroomOutputReference getHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference">OceanEcsAutoscalerHeadroomOutputReference</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimits"></a>

```java
public OceanEcsAutoscalerResourceLimitsOutputReference getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference">OceanEcsAutoscalerResourceLimitsOutputReference</a>

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```java
public java.lang.Number getAutoHeadroomPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `downInput`<sup>Optional</sup> <a name="downInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.downInput"></a>

```java
public OceanEcsAutoscalerDown getDownInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---

##### `enableAutomaticAndManualHeadroomInput`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroomInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```java
public java.lang.Object getEnableAutomaticAndManualHeadroomInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headroomInput`<sup>Optional</sup> <a name="headroomInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroomInput"></a>

```java
public OceanEcsAutoscalerHeadroom getHeadroomInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---

##### `isAutoConfigInput`<sup>Optional</sup> <a name="isAutoConfigInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfigInput"></a>

```java
public java.lang.Object getIsAutoConfigInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimitsInput"></a>

```java
public OceanEcsAutoscalerResourceLimits getResourceLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---

##### `shouldScaleDownNonServiceTasksInput`<sup>Optional</sup> <a name="shouldScaleDownNonServiceTasksInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasksInput"></a>

```java
public java.lang.Object getShouldScaleDownNonServiceTasksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```java
public java.lang.Number getAutoHeadroomPercentage();
```

- *Type:* java.lang.Number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `enableAutomaticAndManualHeadroom`<sup>Required</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```java
public java.lang.Object getEnableAutomaticAndManualHeadroom();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoConfig`<sup>Required</sup> <a name="isAutoConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfig"></a>

```java
public java.lang.Object getIsAutoConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldScaleDownNonServiceTasks`<sup>Required</sup> <a name="shouldScaleDownNonServiceTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasks"></a>

```java
public java.lang.Object getShouldScaleDownNonServiceTasks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.internalValue"></a>

```java
public OceanEcsAutoscaler getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---


### OceanEcsAutoscalerResourceLimitsOutputReference <a name="OceanEcsAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsAutoscalerResourceLimitsOutputReference;

new OceanEcsAutoscalerResourceLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```java
public void resetMaxMemoryGib()
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```java
public void resetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```java
public java.lang.Number getMaxMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```java
public java.lang.Number getMaxVcpuInput();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```java
public OceanEcsAutoscalerResourceLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---


### OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference;

new OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">baseSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">sizePerResourceUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">baseSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseSizeInput`<sup>Optional</sup> <a name="baseSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```java
public java.lang.Number getBaseSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `sizePerResourceUnitInput`<sup>Optional</sup> <a name="sizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```java
public java.lang.Number getSizePerResourceUnitInput();
```

- *Type:* java.lang.Number

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```java
public java.lang.Number getBaseSize();
```

- *Type:* java.lang.Number

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```java
public java.lang.Number getSizePerResourceUnit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```java
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanEcsBlockDeviceMappingsEbsOutputReference <a name="OceanEcsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsBlockDeviceMappingsEbsOutputReference;

new OceanEcsBlockDeviceMappingsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">putDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">resetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicVolumeSize` <a name="putDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```java
public void putDynamicVolumeSize(OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetDynamicVolumeSize` <a name="resetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```java
public void resetDynamicVolumeSize()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">dynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicVolumeSize`<sup>Required</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```java
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference getDynamicVolumeSize();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicVolumeSizeInput`<sup>Optional</sup> <a name="dynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```java
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize getDynamicVolumeSizeInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```java
public OceanEcsBlockDeviceMappingsEbs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---


### OceanEcsBlockDeviceMappingsList <a name="OceanEcsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsBlockDeviceMappingsList;

new OceanEcsBlockDeviceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get"></a>

```java
public OceanEcsBlockDeviceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>>

---


### OceanEcsBlockDeviceMappingsOutputReference <a name="OceanEcsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsBlockDeviceMappingsOutputReference;

new OceanEcsBlockDeviceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs"></a>

```java
public void putEbs(OceanEcsBlockDeviceMappingsEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference">OceanEcsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebs"></a>

```java
public OceanEcsBlockDeviceMappingsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference">OceanEcsBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```java
public OceanEcsBlockDeviceMappingsEbs getEbsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```java
public java.lang.String getNoDeviceInput();
```

- *Type:* java.lang.String

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>

---


### OceanEcsClusterOrientationList <a name="OceanEcsClusterOrientationList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsClusterOrientationList;

new OceanEcsClusterOrientationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get"></a>

```java
public OceanEcsClusterOrientationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>>

---


### OceanEcsClusterOrientationOutputReference <a name="OceanEcsClusterOrientationOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsClusterOrientationOutputReference;

new OceanEcsClusterOrientationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resetAvailabilityVsCost">resetAvailabilityVsCost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityVsCost` <a name="resetAvailabilityVsCost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resetAvailabilityVsCost"></a>

```java
public void resetAvailabilityVsCost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCostInput">availabilityVsCostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCost">availabilityVsCost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityVsCostInput`<sup>Optional</sup> <a name="availabilityVsCostInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCostInput"></a>

```java
public java.lang.String getAvailabilityVsCostInput();
```

- *Type:* java.lang.String

---

##### `availabilityVsCost`<sup>Required</sup> <a name="availabilityVsCost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCost"></a>

```java
public java.lang.String getAvailabilityVsCost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>

---


### OceanEcsFiltersOutputReference <a name="OceanEcsFiltersOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsFiltersOutputReference;

new OceanEcsFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetDiskTypes">resetDiskTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeFamilies">resetExcludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeMetal">resetExcludeMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetHypervisor">resetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIncludeFamilies">resetIncludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIsEnaSupported">resetIsEnaSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxGpu">resetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxNetworkPerformance">resetMaxNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinEnis">resetMinEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinGpu">resetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinMemoryGib">resetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinNetworkPerformance">resetMinNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinVcpu">resetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetRootDeviceTypes">resetRootDeviceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetVirtualizationTypes">resetVirtualizationTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetArchitectures"></a>

```java
public void resetArchitectures()
```

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetCategories"></a>

```java
public void resetCategories()
```

##### `resetDiskTypes` <a name="resetDiskTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetDiskTypes"></a>

```java
public void resetDiskTypes()
```

##### `resetExcludeFamilies` <a name="resetExcludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeFamilies"></a>

```java
public void resetExcludeFamilies()
```

##### `resetExcludeMetal` <a name="resetExcludeMetal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeMetal"></a>

```java
public void resetExcludeMetal()
```

##### `resetHypervisor` <a name="resetHypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetHypervisor"></a>

```java
public void resetHypervisor()
```

##### `resetIncludeFamilies` <a name="resetIncludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIncludeFamilies"></a>

```java
public void resetIncludeFamilies()
```

##### `resetIsEnaSupported` <a name="resetIsEnaSupported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIsEnaSupported"></a>

```java
public void resetIsEnaSupported()
```

##### `resetMaxGpu` <a name="resetMaxGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxGpu"></a>

```java
public void resetMaxGpu()
```

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxMemoryGib"></a>

```java
public void resetMaxMemoryGib()
```

##### `resetMaxNetworkPerformance` <a name="resetMaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxNetworkPerformance"></a>

```java
public void resetMaxNetworkPerformance()
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxVcpu"></a>

```java
public void resetMaxVcpu()
```

##### `resetMinEnis` <a name="resetMinEnis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinEnis"></a>

```java
public void resetMinEnis()
```

##### `resetMinGpu` <a name="resetMinGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinGpu"></a>

```java
public void resetMinGpu()
```

##### `resetMinMemoryGib` <a name="resetMinMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinMemoryGib"></a>

```java
public void resetMinMemoryGib()
```

##### `resetMinNetworkPerformance` <a name="resetMinNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinNetworkPerformance"></a>

```java
public void resetMinNetworkPerformance()
```

##### `resetMinVcpu` <a name="resetMinVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinVcpu"></a>

```java
public void resetMinVcpu()
```

##### `resetRootDeviceTypes` <a name="resetRootDeviceTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetRootDeviceTypes"></a>

```java
public void resetRootDeviceTypes()
```

##### `resetVirtualizationTypes` <a name="resetVirtualizationTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetVirtualizationTypes"></a>

```java
public void resetVirtualizationTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypesInput">diskTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamiliesInput">excludeFamiliesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetalInput">excludeMetalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisorInput">hypervisorInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamiliesInput">includeFamiliesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupportedInput">isEnaSupportedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpuInput">maxGpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformanceInput">maxNetworkPerformanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnisInput">minEnisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpuInput">minGpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGibInput">minMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformanceInput">minNetworkPerformanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpuInput">minVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypesInput">rootDeviceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypesInput">virtualizationTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypes">diskTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamilies">excludeFamilies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetal">excludeMetal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisor">hypervisor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamilies">includeFamilies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupported">isEnaSupported</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpu">maxGpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformance">maxNetworkPerformance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnis">minEnis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpu">minGpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGib">minMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformance">minNetworkPerformance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpu">minVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypes">rootDeviceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypes">virtualizationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architecturesInput"></a>

```java
public java.util.List<java.lang.String> getArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categoriesInput"></a>

```java
public java.util.List<java.lang.String> getCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `diskTypesInput`<sup>Optional</sup> <a name="diskTypesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypesInput"></a>

```java
public java.util.List<java.lang.String> getDiskTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeFamiliesInput`<sup>Optional</sup> <a name="excludeFamiliesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamiliesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeFamiliesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeMetalInput`<sup>Optional</sup> <a name="excludeMetalInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetalInput"></a>

```java
public java.lang.Object getExcludeMetalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hypervisorInput`<sup>Optional</sup> <a name="hypervisorInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisorInput"></a>

```java
public java.util.List<java.lang.String> getHypervisorInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeFamiliesInput`<sup>Optional</sup> <a name="includeFamiliesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamiliesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeFamiliesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnaSupportedInput`<sup>Optional</sup> <a name="isEnaSupportedInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupportedInput"></a>

```java
public java.lang.String getIsEnaSupportedInput();
```

- *Type:* java.lang.String

---

##### `maxGpuInput`<sup>Optional</sup> <a name="maxGpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpuInput"></a>

```java
public java.lang.Number getMaxGpuInput();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGibInput"></a>

```java
public java.lang.Number getMaxMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `maxNetworkPerformanceInput`<sup>Optional</sup> <a name="maxNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```java
public java.lang.Number getMaxNetworkPerformanceInput();
```

- *Type:* java.lang.Number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpuInput"></a>

```java
public java.lang.Number getMaxVcpuInput();
```

- *Type:* java.lang.Number

---

##### `minEnisInput`<sup>Optional</sup> <a name="minEnisInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnisInput"></a>

```java
public java.lang.Number getMinEnisInput();
```

- *Type:* java.lang.Number

---

##### `minGpuInput`<sup>Optional</sup> <a name="minGpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpuInput"></a>

```java
public java.lang.Number getMinGpuInput();
```

- *Type:* java.lang.Number

---

##### `minMemoryGibInput`<sup>Optional</sup> <a name="minMemoryGibInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGibInput"></a>

```java
public java.lang.Number getMinMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `minNetworkPerformanceInput`<sup>Optional</sup> <a name="minNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```java
public java.lang.Number getMinNetworkPerformanceInput();
```

- *Type:* java.lang.Number

---

##### `minVcpuInput`<sup>Optional</sup> <a name="minVcpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpuInput"></a>

```java
public java.lang.Number getMinVcpuInput();
```

- *Type:* java.lang.Number

---

##### `rootDeviceTypesInput`<sup>Optional</sup> <a name="rootDeviceTypesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypesInput"></a>

```java
public java.util.List<java.lang.String> getRootDeviceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualizationTypesInput`<sup>Optional</sup> <a name="virtualizationTypesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypesInput"></a>

```java
public java.util.List<java.lang.String> getVirtualizationTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `diskTypes`<sup>Required</sup> <a name="diskTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypes"></a>

```java
public java.util.List<java.lang.String> getDiskTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeFamilies`<sup>Required</sup> <a name="excludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamilies"></a>

```java
public java.util.List<java.lang.String> getExcludeFamilies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeMetal`<sup>Required</sup> <a name="excludeMetal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetal"></a>

```java
public java.lang.Object getExcludeMetal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisor"></a>

```java
public java.util.List<java.lang.String> getHypervisor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeFamilies`<sup>Required</sup> <a name="includeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamilies"></a>

```java
public java.util.List<java.lang.String> getIncludeFamilies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnaSupported`<sup>Required</sup> <a name="isEnaSupported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupported"></a>

```java
public java.lang.String getIsEnaSupported();
```

- *Type:* java.lang.String

---

##### `maxGpu`<sup>Required</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpu"></a>

```java
public java.lang.Number getMaxGpu();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

---

##### `maxNetworkPerformance`<sup>Required</sup> <a name="maxNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformance"></a>

```java
public java.lang.Number getMaxNetworkPerformance();
```

- *Type:* java.lang.Number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

---

##### `minEnis`<sup>Required</sup> <a name="minEnis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnis"></a>

```java
public java.lang.Number getMinEnis();
```

- *Type:* java.lang.Number

---

##### `minGpu`<sup>Required</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpu"></a>

```java
public java.lang.Number getMinGpu();
```

- *Type:* java.lang.Number

---

##### `minMemoryGib`<sup>Required</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGib"></a>

```java
public java.lang.Number getMinMemoryGib();
```

- *Type:* java.lang.Number

---

##### `minNetworkPerformance`<sup>Required</sup> <a name="minNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformance"></a>

```java
public java.lang.Number getMinNetworkPerformance();
```

- *Type:* java.lang.Number

---

##### `minVcpu`<sup>Required</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpu"></a>

```java
public java.lang.Number getMinVcpu();
```

- *Type:* java.lang.Number

---

##### `rootDeviceTypes`<sup>Required</sup> <a name="rootDeviceTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypes"></a>

```java
public java.util.List<java.lang.String> getRootDeviceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualizationTypes`<sup>Required</sup> <a name="virtualizationTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypes"></a>

```java
public java.util.List<java.lang.String> getVirtualizationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.internalValue"></a>

```java
public OceanEcsFilters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---


### OceanEcsInstanceMetadataOptionsOutputReference <a name="OceanEcsInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsInstanceMetadataOptionsOutputReference;

new OceanEcsInstanceMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```java
public void resetHttpPutResponseHopLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```java
public java.lang.Number getHttpPutResponseHopLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```java
public java.lang.String getHttpTokensInput();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```java
public OceanEcsInstanceMetadataOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---


### OceanEcsLoggingExportOutputReference <a name="OceanEcsLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsLoggingExportOutputReference;

new OceanEcsLoggingExportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3"></a>

```java
public void putS3(IResolvable OR java.util.List<OceanEcsLoggingExportS3> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>>

---

##### `resetS3` <a name="resetS3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List">OceanEcsLoggingExportS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3Input">s3Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3"></a>

```java
public OceanEcsLoggingExportS3List getS3();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List">OceanEcsLoggingExportS3List</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3Input"></a>

```java
public java.lang.Object getS3Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.internalValue"></a>

```java
public OceanEcsLoggingExport getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---


### OceanEcsLoggingExportS3List <a name="OceanEcsLoggingExportS3List" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsLoggingExportS3List;

new OceanEcsLoggingExportS3List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get"></a>

```java
public OceanEcsLoggingExportS3OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>>

---


### OceanEcsLoggingExportS3OutputReference <a name="OceanEcsLoggingExportS3OutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsLoggingExportS3OutputReference;

new OceanEcsLoggingExportS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>

---


### OceanEcsLoggingOutputReference <a name="OceanEcsLoggingOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsLoggingOutputReference;

new OceanEcsLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport">putExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resetExport">resetExport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExport` <a name="putExport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport"></a>

```java
public void putExport(OceanEcsLoggingExport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---

##### `resetExport` <a name="resetExport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resetExport"></a>

```java
public void resetExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference">OceanEcsLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.exportInput">exportInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.export"></a>

```java
public OceanEcsLoggingExportOutputReference getExport();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference">OceanEcsLoggingExportOutputReference</a>

---

##### `exportInput`<sup>Optional</sup> <a name="exportInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.exportInput"></a>

```java
public OceanEcsLoggingExport getExportInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.internalValue"></a>

```java
public OceanEcsLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---


### OceanEcsOptimizeImagesOutputReference <a name="OceanEcsOptimizeImagesOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsOptimizeImagesOutputReference;

new OceanEcsOptimizeImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resetTimeWindows">resetTimeWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeWindows` <a name="resetTimeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resetTimeWindows"></a>

```java
public void resetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAtInput">performAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmiInput">shouldOptimizeEcsAmiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAt">performAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmi">shouldOptimizeEcsAmi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `performAtInput`<sup>Optional</sup> <a name="performAtInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAtInput"></a>

```java
public java.lang.String getPerformAtInput();
```

- *Type:* java.lang.String

---

##### `shouldOptimizeEcsAmiInput`<sup>Optional</sup> <a name="shouldOptimizeEcsAmiInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmiInput"></a>

```java
public java.lang.Object getShouldOptimizeEcsAmiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindowsInput"></a>

```java
public java.util.List<java.lang.String> getTimeWindowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `performAt`<sup>Required</sup> <a name="performAt" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAt"></a>

```java
public java.lang.String getPerformAt();
```

- *Type:* java.lang.String

---

##### `shouldOptimizeEcsAmi`<sup>Required</sup> <a name="shouldOptimizeEcsAmi" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmi"></a>

```java
public java.lang.Object getShouldOptimizeEcsAmi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.internalValue"></a>

```java
public OceanEcsOptimizeImages getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---


### OceanEcsScheduledTaskList <a name="OceanEcsScheduledTaskList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTaskList;

new OceanEcsScheduledTaskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get"></a>

```java
public OceanEcsScheduledTaskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>>

---


### OceanEcsScheduledTaskOutputReference <a name="OceanEcsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTaskOutputReference;

new OceanEcsScheduledTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours">putShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetShutdownHours">resetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetTasks">resetTasks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShutdownHours` <a name="putShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours"></a>

```java
public void putShutdownHours(OceanEcsScheduledTaskShutdownHours value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---

##### `putTasks` <a name="putTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks"></a>

```java
public void putTasks(IResolvable OR java.util.List<OceanEcsScheduledTaskTasks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>>

---

##### `resetShutdownHours` <a name="resetShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetShutdownHours"></a>

```java
public void resetShutdownHours()
```

##### `resetTasks` <a name="resetTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetTasks"></a>

```java
public void resetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference">OceanEcsScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList">OceanEcsScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHoursInput">shutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasksInput">tasksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shutdownHours`<sup>Required</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHours"></a>

```java
public OceanEcsScheduledTaskShutdownHoursOutputReference getShutdownHours();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference">OceanEcsScheduledTaskShutdownHoursOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasks"></a>

```java
public OceanEcsScheduledTaskTasksList getTasks();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList">OceanEcsScheduledTaskTasksList</a>

---

##### `shutdownHoursInput`<sup>Optional</sup> <a name="shutdownHoursInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```java
public OceanEcsScheduledTaskShutdownHours getShutdownHoursInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasksInput"></a>

```java
public java.lang.Object getTasksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>

---


### OceanEcsScheduledTaskShutdownHoursOutputReference <a name="OceanEcsScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTaskShutdownHoursOutputReference;

new OceanEcsScheduledTaskShutdownHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```java
public java.util.List<java.lang.String> getTimeWindowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```java
public OceanEcsScheduledTaskShutdownHours getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---


### OceanEcsScheduledTaskTasksList <a name="OceanEcsScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTaskTasksList;

new OceanEcsScheduledTaskTasksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get"></a>

```java
public OceanEcsScheduledTaskTasksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>>

---


### OceanEcsScheduledTaskTasksOutputReference <a name="OceanEcsScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsScheduledTaskTasksOutputReference;

new OceanEcsScheduledTaskTasksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>

---


### OceanEcsTagsList <a name="OceanEcsTagsList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsTagsList;

new OceanEcsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get"></a>

```java
public OceanEcsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>>

---


### OceanEcsTagsOutputReference <a name="OceanEcsTagsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsTagsOutputReference;

new OceanEcsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>

---


### OceanEcsUpdatePolicyOutputReference <a name="OceanEcsUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsUpdatePolicyOutputReference;

new OceanEcsUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetAutoApplyTags">resetAutoApplyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetConditionedRoll">resetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig"></a>

```java
public void putRollConfig(OceanEcsUpdatePolicyRollConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---

##### `resetAutoApplyTags` <a name="resetAutoApplyTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetAutoApplyTags"></a>

```java
public void resetAutoApplyTags()
```

##### `resetConditionedRoll` <a name="resetConditionedRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetConditionedRoll"></a>

```java
public void resetConditionedRoll()
```

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetRollConfig"></a>

```java
public void resetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference">OceanEcsUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTagsInput">autoApplyTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRollInput">conditionedRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTags">autoApplyTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRoll">conditionedRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfig"></a>

```java
public OceanEcsUpdatePolicyRollConfigOutputReference getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference">OceanEcsUpdatePolicyRollConfigOutputReference</a>

---

##### `autoApplyTagsInput`<sup>Optional</sup> <a name="autoApplyTagsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTagsInput"></a>

```java
public java.lang.Object getAutoApplyTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `conditionedRollInput`<sup>Optional</sup> <a name="conditionedRollInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```java
public java.lang.Object getConditionedRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfigInput"></a>

```java
public OceanEcsUpdatePolicyRollConfig getRollConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRollInput"></a>

```java
public java.lang.Object getShouldRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoApplyTags`<sup>Required</sup> <a name="autoApplyTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTags"></a>

```java
public java.lang.Object getAutoApplyTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `conditionedRoll`<sup>Required</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRoll"></a>

```java
public java.lang.Object getConditionedRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.internalValue"></a>

```java
public OceanEcsUpdatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---


### OceanEcsUpdatePolicyRollConfigOutputReference <a name="OceanEcsUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_ecs.OceanEcsUpdatePolicyRollConfigOutputReference;

new OceanEcsUpdatePolicyRollConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```java
public void resetBatchMinHealthyPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```java
public java.lang.Number getBatchMinHealthyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.Number getBatchSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```java
public OceanEcsUpdatePolicyRollConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---



