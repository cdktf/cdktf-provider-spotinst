# `oceanEcs` Submodule <a name="`oceanEcs` Submodule" id="@cdktf/provider-spotinst.oceanEcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanEcs <a name="OceanEcs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs spotinst_ocean_ecs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  image_id: str,
  name: str,
  region: str,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  autoscaler: OceanEcsAutoscaler = None,
  blacklist: typing.List[str] = None,
  block_device_mappings: typing.Union[IResolvable, typing.List[OceanEcsBlockDeviceMappings]] = None,
  cluster_orientation: typing.Union[IResolvable, typing.List[OceanEcsClusterOrientation]] = None,
  desired_capacity: typing.Union[int, float] = None,
  draining_timeout: typing.Union[int, float] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  filters: OceanEcsFilters = None,
  iam_instance_profile: str = None,
  id: str = None,
  instance_metadata_options: OceanEcsInstanceMetadataOptions = None,
  key_pair: str = None,
  logging: OceanEcsLogging = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  optimize_images: OceanEcsOptimizeImages = None,
  scheduled_task: typing.Union[IResolvable, typing.List[OceanEcsScheduledTask]] = None,
  spot_percentage: typing.Union[int, float] = None,
  tags: typing.Union[IResolvable, typing.List[OceanEcsTags]] = None,
  update_policy: OceanEcsUpdatePolicy = None,
  use_as_template_only: typing.Union[bool, IResolvable] = None,
  user_data: str = None,
  utilize_commitments: typing.Union[bool, IResolvable] = None,
  utilize_reserved_instances: typing.Union[bool, IResolvable] = None,
  whitelist: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#name OceanEcs#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#region OceanEcs#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blacklist">blacklist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blockDeviceMappings">block_device_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterOrientation">cluster_orientation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#id OceanEcs#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.optimizeImages">optimize_images</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | optimize_images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.useAsTemplateOnly">use_as_template_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeCommitments">utilize_commitments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeReservedInstances">utilize_reserved_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.whitelist">whitelist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}.

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#name OceanEcs#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#region OceanEcs#region}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.autoscaler"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#autoscaler OceanEcs#autoscaler}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blacklist"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}.

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#block_device_mappings OceanEcs#block_device_mappings}

---

##### `cluster_orientation`<sup>Optional</sup> <a name="cluster_orientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.clusterOrientation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cluster_orientation OceanEcs#cluster_orientation}

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.drainingTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.ebsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#filters OceanEcs#filters}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_metadata_options`<sup>Optional</sup> <a name="instance_metadata_options" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.instanceMetadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#instance_metadata_options OceanEcs#instance_metadata_options}

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.keyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#logging OceanEcs#logging}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.monitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}.

---

##### `optimize_images`<sup>Optional</sup> <a name="optimize_images" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.optimizeImages"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

optimize_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#optimize_images OceanEcs#optimize_images}

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scheduledTask"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#scheduled_task OceanEcs#scheduled_task}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.spotPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#tags OceanEcs#tags}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#update_policy OceanEcs#update_policy}

---

##### `use_as_template_only`<sup>Optional</sup> <a name="use_as_template_only" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.useAsTemplateOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}.

---

##### `utilize_commitments`<sup>Optional</sup> <a name="utilize_commitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeCommitments"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}.

---

##### `utilize_reserved_instances`<sup>Optional</sup> <a name="utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.utilizeReservedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.whitelist"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler">put_autoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings">put_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation">put_cluster_orientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions">put_instance_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages">put_optimize_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask">put_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy">put_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAutoscaler">reset_autoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlacklist">reset_blacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlockDeviceMappings">reset_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetClusterOrientation">reset_cluster_orientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetInstanceMetadataOptions">reset_instance_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetKeyPair">reset_key_pair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOptimizeImages">reset_optimize_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetScheduledTask">reset_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetSpotPercentage">reset_spot_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUpdatePolicy">reset_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUseAsTemplateOnly">reset_use_as_template_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeCommitments">reset_utilize_commitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeReservedInstances">reset_utilize_reserved_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetWhitelist">reset_whitelist</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaler` <a name="put_autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler"></a>

```python
def put_autoscaler(
  auto_headroom_percentage: typing.Union[int, float] = None,
  cooldown: typing.Union[int, float] = None,
  down: OceanEcsAutoscalerDown = None,
  enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable] = None,
  headroom: OceanEcsAutoscalerHeadroom = None,
  is_auto_config: typing.Union[bool, IResolvable] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  resource_limits: OceanEcsAutoscalerResourceLimits = None,
  should_scale_down_non_service_tasks: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_headroom_percentage`<sup>Optional</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.autoHeadroomPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#auto_headroom_percentage OceanEcs#auto_headroom_percentage}.

---

###### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.cooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cooldown OceanEcs#cooldown}.

---

###### `down`<sup>Optional</sup> <a name="down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.down"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#down OceanEcs#down}

---

###### `enable_automatic_and_manual_headroom`<sup>Optional</sup> <a name="enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.enableAutomaticAndManualHeadroom"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#enable_automatic_and_manual_headroom OceanEcs#enable_automatic_and_manual_headroom}.

---

###### `headroom`<sup>Optional</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.headroom"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#headroom OceanEcs#headroom}

---

###### `is_auto_config`<sup>Optional</sup> <a name="is_auto_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.isAutoConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_auto_config OceanEcs#is_auto_config}.

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

###### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.resourceLimits"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#resource_limits OceanEcs#resource_limits}

---

###### `should_scale_down_non_service_tasks`<sup>Optional</sup> <a name="should_scale_down_non_service_tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.shouldScaleDownNonServiceTasks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_scale_down_non_service_tasks OceanEcs#should_scale_down_non_service_tasks}.

---

##### `put_block_device_mappings` <a name="put_block_device_mappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings"></a>

```python
def put_block_device_mappings(
  value: typing.Union[IResolvable, typing.List[OceanEcsBlockDeviceMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]

---

##### `put_cluster_orientation` <a name="put_cluster_orientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation"></a>

```python
def put_cluster_orientation(
  value: typing.Union[IResolvable, typing.List[OceanEcsClusterOrientation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters"></a>

```python
def put_filters(
  architectures: typing.List[str] = None,
  categories: typing.List[str] = None,
  disk_types: typing.List[str] = None,
  exclude_families: typing.List[str] = None,
  exclude_metal: typing.Union[bool, IResolvable] = None,
  hypervisor: typing.List[str] = None,
  include_families: typing.List[str] = None,
  is_ena_supported: str = None,
  max_gpu: typing.Union[int, float] = None,
  max_memory_gib: typing.Union[int, float] = None,
  max_network_performance: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None,
  min_enis: typing.Union[int, float] = None,
  min_gpu: typing.Union[int, float] = None,
  min_memory_gib: typing.Union[int, float] = None,
  min_network_performance: typing.Union[int, float] = None,
  min_vcpu: typing.Union[int, float] = None,
  root_device_types: typing.List[str] = None,
  virtualization_types: typing.List[str] = None
) -> None
```

###### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.architectures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#architectures OceanEcs#architectures}.

---

###### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.categories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#categories OceanEcs#categories}.

---

###### `disk_types`<sup>Optional</sup> <a name="disk_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.diskTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#disk_types OceanEcs#disk_types}.

---

###### `exclude_families`<sup>Optional</sup> <a name="exclude_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.excludeFamilies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#exclude_families OceanEcs#exclude_families}.

---

###### `exclude_metal`<sup>Optional</sup> <a name="exclude_metal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.excludeMetal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#exclude_metal OceanEcs#exclude_metal}.

---

###### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.hypervisor"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#hypervisor OceanEcs#hypervisor}.

---

###### `include_families`<sup>Optional</sup> <a name="include_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.includeFamilies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#include_families OceanEcs#include_families}.

---

###### `is_ena_supported`<sup>Optional</sup> <a name="is_ena_supported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.isEnaSupported"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_ena_supported OceanEcs#is_ena_supported}.

---

###### `max_gpu`<sup>Optional</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.maxGpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_gpu OceanEcs#max_gpu}.

---

###### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.maxMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

###### `max_network_performance`<sup>Optional</sup> <a name="max_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.maxNetworkPerformance"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_network_performance OceanEcs#max_network_performance}.

---

###### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.maxVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

###### `min_enis`<sup>Optional</sup> <a name="min_enis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.minEnis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_enis OceanEcs#min_enis}.

---

###### `min_gpu`<sup>Optional</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.minGpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_gpu OceanEcs#min_gpu}.

---

###### `min_memory_gib`<sup>Optional</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.minMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_memory_gib OceanEcs#min_memory_gib}.

---

###### `min_network_performance`<sup>Optional</sup> <a name="min_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.minNetworkPerformance"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_network_performance OceanEcs#min_network_performance}.

---

###### `min_vcpu`<sup>Optional</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.minVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_vcpu OceanEcs#min_vcpu}.

---

###### `root_device_types`<sup>Optional</sup> <a name="root_device_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.rootDeviceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#root_device_types OceanEcs#root_device_types}.

---

###### `virtualization_types`<sup>Optional</sup> <a name="virtualization_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.virtualizationTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#virtualization_types OceanEcs#virtualization_types}.

---

##### `put_instance_metadata_options` <a name="put_instance_metadata_options" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions"></a>

```python
def put_instance_metadata_options(
  http_tokens: str,
  http_put_response_hop_limit: typing.Union[int, float] = None
) -> None
```

###### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#http_tokens OceanEcs#http_tokens}.

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#http_put_response_hop_limit OceanEcs#http_put_response_hop_limit}.

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging"></a>

```python
def put_logging(
  export: OceanEcsLoggingExport = None
) -> None
```

###### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging.parameter.export"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#export OceanEcs#export}

---

##### `put_optimize_images` <a name="put_optimize_images" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages"></a>

```python
def put_optimize_images(
  perform_at: str,
  should_optimize_ecs_ami: typing.Union[bool, IResolvable],
  time_windows: typing.List[str] = None
) -> None
```

###### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages.parameter.performAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#perform_at OceanEcs#perform_at}.

---

###### `should_optimize_ecs_ami`<sup>Required</sup> <a name="should_optimize_ecs_ami" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages.parameter.shouldOptimizeEcsAmi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_optimize_ecs_ami OceanEcs#should_optimize_ecs_ami}.

---

###### `time_windows`<sup>Optional</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages.parameter.timeWindows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

##### `put_scheduled_task` <a name="put_scheduled_task" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask"></a>

```python
def put_scheduled_task(
  value: typing.Union[IResolvable, typing.List[OceanEcsScheduledTask]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[OceanEcsTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]

---

##### `put_update_policy` <a name="put_update_policy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy"></a>

```python
def put_update_policy(
  should_roll: typing.Union[bool, IResolvable],
  auto_apply_tags: typing.Union[bool, IResolvable] = None,
  conditioned_roll: typing.Union[bool, IResolvable] = None,
  roll_config: OceanEcsUpdatePolicyRollConfig = None
) -> None
```

###### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy.parameter.shouldRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_roll OceanEcs#should_roll}.

---

###### `auto_apply_tags`<sup>Optional</sup> <a name="auto_apply_tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy.parameter.autoApplyTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#auto_apply_tags OceanEcs#auto_apply_tags}.

---

###### `conditioned_roll`<sup>Optional</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy.parameter.conditionedRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#conditioned_roll OceanEcs#conditioned_roll}.

---

###### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy.parameter.rollConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#roll_config OceanEcs#roll_config}

---

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_autoscaler` <a name="reset_autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAutoscaler"></a>

```python
def reset_autoscaler() -> None
```

##### `reset_blacklist` <a name="reset_blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlacklist"></a>

```python
def reset_blacklist() -> None
```

##### `reset_block_device_mappings` <a name="reset_block_device_mappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlockDeviceMappings"></a>

```python
def reset_block_device_mappings() -> None
```

##### `reset_cluster_orientation` <a name="reset_cluster_orientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetClusterOrientation"></a>

```python
def reset_cluster_orientation() -> None
```

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_metadata_options` <a name="reset_instance_metadata_options" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetInstanceMetadataOptions"></a>

```python
def reset_instance_metadata_options() -> None
```

##### `reset_key_pair` <a name="reset_key_pair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetKeyPair"></a>

```python
def reset_key_pair() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_optimize_images` <a name="reset_optimize_images" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOptimizeImages"></a>

```python
def reset_optimize_images() -> None
```

##### `reset_scheduled_task` <a name="reset_scheduled_task" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetScheduledTask"></a>

```python
def reset_scheduled_task() -> None
```

##### `reset_spot_percentage` <a name="reset_spot_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetSpotPercentage"></a>

```python
def reset_spot_percentage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_update_policy` <a name="reset_update_policy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUpdatePolicy"></a>

```python
def reset_update_policy() -> None
```

##### `reset_use_as_template_only` <a name="reset_use_as_template_only" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUseAsTemplateOnly"></a>

```python
def reset_use_as_template_only() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_utilize_commitments` <a name="reset_utilize_commitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeCommitments"></a>

```python
def reset_utilize_commitments() -> None
```

##### `reset_utilize_reserved_instances` <a name="reset_utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeReservedInstances"></a>

```python
def reset_utilize_reserved_instances() -> None
```

##### `reset_whitelist` <a name="reset_whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetWhitelist"></a>

```python
def reset_whitelist() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceanEcs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcs.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcs.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceanEcs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceanEcs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceanEcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanEcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference">OceanEcsAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList">OceanEcsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientation">cluster_orientation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList">OceanEcsClusterOrientationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference">OceanEcsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference">OceanEcsInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference">OceanEcsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImages">optimize_images</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference">OceanEcsOptimizeImagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTask">scheduled_task</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList">OceanEcsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList">OceanEcsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference">OceanEcsUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscalerInput">autoscaler_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklistInput">blacklist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappingsInput">block_device_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientationInput">cluster_orientation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filtersInput">filters_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptionsInput">instance_metadata_options_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoringInput">monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImagesInput">optimize_images_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTaskInput">scheduled_task_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentageInput">spot_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicyInput">update_policy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnlyInput">use_as_template_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitmentsInput">utilize_commitments_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstancesInput">utilize_reserved_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelistInput">whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklist">blacklist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnly">use_as_template_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitments">utilize_commitments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstances">utilize_reserved_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelist">whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscaler"></a>

```python
autoscaler: OceanEcsAutoscalerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference">OceanEcsAutoscalerOutputReference</a>

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappings"></a>

```python
block_device_mappings: OceanEcsBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList">OceanEcsBlockDeviceMappingsList</a>

---

##### `cluster_orientation`<sup>Required</sup> <a name="cluster_orientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientation"></a>

```python
cluster_orientation: OceanEcsClusterOrientationList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList">OceanEcsClusterOrientationList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filters"></a>

```python
filters: OceanEcsFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference">OceanEcsFiltersOutputReference</a>

---

##### `instance_metadata_options`<sup>Required</sup> <a name="instance_metadata_options" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: OceanEcsInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference">OceanEcsInstanceMetadataOptionsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.logging"></a>

```python
logging: OceanEcsLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference">OceanEcsLoggingOutputReference</a>

---

##### `optimize_images`<sup>Required</sup> <a name="optimize_images" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImages"></a>

```python
optimize_images: OceanEcsOptimizeImagesOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference">OceanEcsOptimizeImagesOutputReference</a>

---

##### `scheduled_task`<sup>Required</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTask"></a>

```python
scheduled_task: OceanEcsScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList">OceanEcsScheduledTaskList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tags"></a>

```python
tags: OceanEcsTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList">OceanEcsTagsList</a>

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicy"></a>

```python
update_policy: OceanEcsUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference">OceanEcsUpdatePolicyOutputReference</a>

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscaler_input`<sup>Optional</sup> <a name="autoscaler_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscalerInput"></a>

```python
autoscaler_input: OceanEcsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---

##### `blacklist_input`<sup>Optional</sup> <a name="blacklist_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklistInput"></a>

```python
blacklist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_device_mappings_input`<sup>Optional</sup> <a name="block_device_mappings_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappingsInput"></a>

```python
block_device_mappings_input: typing.Union[IResolvable, typing.List[OceanEcsBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cluster_orientation_input`<sup>Optional</sup> <a name="cluster_orientation_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientationInput"></a>

```python
cluster_orientation_input: typing.Union[IResolvable, typing.List[OceanEcsClusterOrientation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filtersInput"></a>

```python
filters_input: OceanEcsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_metadata_options_input`<sup>Optional</sup> <a name="instance_metadata_options_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptionsInput"></a>

```python
instance_metadata_options_input: OceanEcsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.loggingInput"></a>

```python
logging_input: OceanEcsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoringInput"></a>

```python
monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `optimize_images_input`<sup>Optional</sup> <a name="optimize_images_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImagesInput"></a>

```python
optimize_images_input: OceanEcsOptimizeImages
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scheduled_task_input`<sup>Optional</sup> <a name="scheduled_task_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTaskInput"></a>

```python
scheduled_task_input: typing.Union[IResolvable, typing.List[OceanEcsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_percentage_input`<sup>Optional</sup> <a name="spot_percentage_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentageInput"></a>

```python
spot_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[OceanEcsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]

---

##### `update_policy_input`<sup>Optional</sup> <a name="update_policy_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicyInput"></a>

```python
update_policy_input: OceanEcsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---

##### `use_as_template_only_input`<sup>Optional</sup> <a name="use_as_template_only_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnlyInput"></a>

```python
use_as_template_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `utilize_commitments_input`<sup>Optional</sup> <a name="utilize_commitments_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitmentsInput"></a>

```python
utilize_commitments_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `utilize_reserved_instances_input`<sup>Optional</sup> <a name="utilize_reserved_instances_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstancesInput"></a>

```python
utilize_reserved_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whitelist_input`<sup>Optional</sup> <a name="whitelist_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelistInput"></a>

```python
whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklist"></a>

```python
blacklist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_percentage`<sup>Required</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_as_template_only`<sup>Required</sup> <a name="use_as_template_only" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnly"></a>

```python
use_as_template_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `utilize_commitments`<sup>Required</sup> <a name="utilize_commitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitments"></a>

```python
utilize_commitments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `utilize_reserved_instances`<sup>Required</sup> <a name="utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstances"></a>

```python
utilize_reserved_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelist"></a>

```python
whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceanEcsAutoscaler <a name="OceanEcsAutoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscaler(
  auto_headroom_percentage: typing.Union[int, float] = None,
  cooldown: typing.Union[int, float] = None,
  down: OceanEcsAutoscalerDown = None,
  enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable] = None,
  headroom: OceanEcsAutoscalerHeadroom = None,
  is_auto_config: typing.Union[bool, IResolvable] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  resource_limits: OceanEcsAutoscalerResourceLimits = None,
  should_scale_down_non_service_tasks: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.autoHeadroomPercentage">auto_headroom_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#auto_headroom_percentage OceanEcs#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cooldown OceanEcs#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.enableAutomaticAndManualHeadroom">enable_automatic_and_manual_headroom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#enable_automatic_and_manual_headroom OceanEcs#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isAutoConfig">is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_auto_config OceanEcs#is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.resourceLimits">resource_limits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.shouldScaleDownNonServiceTasks">should_scale_down_non_service_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_scale_down_non_service_tasks OceanEcs#should_scale_down_non_service_tasks}. |

---

##### `auto_headroom_percentage`<sup>Optional</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.autoHeadroomPercentage"></a>

```python
auto_headroom_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#auto_headroom_percentage OceanEcs#auto_headroom_percentage}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cooldown OceanEcs#cooldown}.

---

##### `down`<sup>Optional</sup> <a name="down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.down"></a>

```python
down: OceanEcsAutoscalerDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#down OceanEcs#down}

---

##### `enable_automatic_and_manual_headroom`<sup>Optional</sup> <a name="enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```python
enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#enable_automatic_and_manual_headroom OceanEcs#enable_automatic_and_manual_headroom}.

---

##### `headroom`<sup>Optional</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.headroom"></a>

```python
headroom: OceanEcsAutoscalerHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#headroom OceanEcs#headroom}

---

##### `is_auto_config`<sup>Optional</sup> <a name="is_auto_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isAutoConfig"></a>

```python
is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_auto_config OceanEcs#is_auto_config}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

##### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.resourceLimits"></a>

```python
resource_limits: OceanEcsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#resource_limits OceanEcs#resource_limits}

---

##### `should_scale_down_non_service_tasks`<sup>Optional</sup> <a name="should_scale_down_non_service_tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.shouldScaleDownNonServiceTasks"></a>

```python
should_scale_down_non_service_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_scale_down_non_service_tasks OceanEcs#should_scale_down_non_service_tasks}.

---

### OceanEcsAutoscalerDown <a name="OceanEcsAutoscalerDown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscalerDown(
  max_scale_down_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.property.maxScaleDownPercentage">max_scale_down_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_scale_down_percentage OceanEcs#max_scale_down_percentage}. |

---

##### `max_scale_down_percentage`<sup>Optional</sup> <a name="max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.property.maxScaleDownPercentage"></a>

```python
max_scale_down_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_scale_down_percentage OceanEcs#max_scale_down_percentage}.

---

### OceanEcsAutoscalerHeadroom <a name="OceanEcsAutoscalerHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscalerHeadroom(
  cpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cpu_per_unit OceanEcs#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#memory_per_unit OceanEcs#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#num_of_units OceanEcs#num_of_units}. |

---

##### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cpu_per_unit OceanEcs#cpu_per_unit}.

---

##### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#memory_per_unit OceanEcs#memory_per_unit}.

---

##### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#num_of_units OceanEcs#num_of_units}.

---

### OceanEcsAutoscalerResourceLimits <a name="OceanEcsAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscalerResourceLimits(
  max_memory_gib: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}. |

---

##### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

##### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

### OceanEcsBlockDeviceMappings <a name="OceanEcsBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsBlockDeviceMappings(
  device_name: str,
  ebs: OceanEcsBlockDeviceMappingsEbs = None,
  no_device: str = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#device_name OceanEcs#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.noDevice">no_device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#no_device OceanEcs#no_device}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#virtual_name OceanEcs#virtual_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#device_name OceanEcs#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.ebs"></a>

```python
ebs: OceanEcsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#ebs OceanEcs#ebs}

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#no_device OceanEcs#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#virtual_name OceanEcs#virtual_name}.

---

### OceanEcsBlockDeviceMappingsEbs <a name="OceanEcsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsBlockDeviceMappingsEbs(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  dynamic_volume_size: OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#delete_on_termination OceanEcs#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.dynamicVolumeSize">dynamic_volume_size</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#encrypted OceanEcs#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#iops OceanEcs#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#kms_key_id OceanEcs#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#snapshot_id OceanEcs#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#throughput OceanEcs#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#volume_size OceanEcs#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#volume_type OceanEcs#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#delete_on_termination OceanEcs#delete_on_termination}.

---

##### `dynamic_volume_size`<sup>Optional</sup> <a name="dynamic_volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```python
dynamic_volume_size: OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#dynamic_volume_size OceanEcs#dynamic_volume_size}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#encrypted OceanEcs#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#iops OceanEcs#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#kms_key_id OceanEcs#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#snapshot_id OceanEcs#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#throughput OceanEcs#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#volume_size OceanEcs#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#volume_type OceanEcs#volume_type}.

---

### OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize(
  base_size: typing.Union[int, float],
  resource: str,
  size_per_resource_unit: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#base_size OceanEcs#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#resource OceanEcs#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">size_per_resource_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#size_per_resource_unit OceanEcs#size_per_resource_unit}. |

---

##### `base_size`<sup>Required</sup> <a name="base_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```python
base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#base_size OceanEcs#base_size}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#resource OceanEcs#resource}.

---

##### `size_per_resource_unit`<sup>Required</sup> <a name="size_per_resource_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```python
size_per_resource_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#size_per_resource_unit OceanEcs#size_per_resource_unit}.

---

### OceanEcsClusterOrientation <a name="OceanEcsClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsClusterOrientation(
  availability_vs_cost: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.property.availabilityVsCost">availability_vs_cost</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#availability_vs_cost OceanEcs#availability_vs_cost}. |

---

##### `availability_vs_cost`<sup>Optional</sup> <a name="availability_vs_cost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.property.availabilityVsCost"></a>

```python
availability_vs_cost: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#availability_vs_cost OceanEcs#availability_vs_cost}.

---

### OceanEcsConfig <a name="OceanEcsConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  image_id: str,
  name: str,
  region: str,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  autoscaler: OceanEcsAutoscaler = None,
  blacklist: typing.List[str] = None,
  block_device_mappings: typing.Union[IResolvable, typing.List[OceanEcsBlockDeviceMappings]] = None,
  cluster_orientation: typing.Union[IResolvable, typing.List[OceanEcsClusterOrientation]] = None,
  desired_capacity: typing.Union[int, float] = None,
  draining_timeout: typing.Union[int, float] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  filters: OceanEcsFilters = None,
  iam_instance_profile: str = None,
  id: str = None,
  instance_metadata_options: OceanEcsInstanceMetadataOptions = None,
  key_pair: str = None,
  logging: OceanEcsLogging = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  optimize_images: OceanEcsOptimizeImages = None,
  scheduled_task: typing.Union[IResolvable, typing.List[OceanEcsScheduledTask]] = None,
  spot_percentage: typing.Union[int, float] = None,
  tags: typing.Union[IResolvable, typing.List[OceanEcsTags]] = None,
  update_policy: OceanEcsUpdatePolicy = None,
  use_as_template_only: typing.Union[bool, IResolvable] = None,
  user_data: str = None,
  utilize_commitments: typing.Union[bool, IResolvable] = None,
  utilize_reserved_instances: typing.Union[bool, IResolvable] = None,
  whitelist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#name OceanEcs#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#region OceanEcs#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blacklist">blacklist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blockDeviceMappings">block_device_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterOrientation">cluster_orientation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#id OceanEcs#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.optimizeImages">optimize_images</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | optimize_images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.useAsTemplateOnly">use_as_template_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeCommitments">utilize_commitments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeReservedInstances">utilize_reserved_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.whitelist">whitelist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}.

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#name OceanEcs#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#region OceanEcs#region}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.autoscaler"></a>

```python
autoscaler: OceanEcsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#autoscaler OceanEcs#autoscaler}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blacklist"></a>

```python
blacklist: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}.

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blockDeviceMappings"></a>

```python
block_device_mappings: typing.Union[IResolvable, typing.List[OceanEcsBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#block_device_mappings OceanEcs#block_device_mappings}

---

##### `cluster_orientation`<sup>Optional</sup> <a name="cluster_orientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterOrientation"></a>

```python
cluster_orientation: typing.Union[IResolvable, typing.List[OceanEcsClusterOrientation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cluster_orientation OceanEcs#cluster_orientation}

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.filters"></a>

```python
filters: OceanEcsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#filters OceanEcs#filters}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_metadata_options`<sup>Optional</sup> <a name="instance_metadata_options" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: OceanEcsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#instance_metadata_options OceanEcs#instance_metadata_options}

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.logging"></a>

```python
logging: OceanEcsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#logging OceanEcs#logging}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}.

---

##### `optimize_images`<sup>Optional</sup> <a name="optimize_images" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.optimizeImages"></a>

```python
optimize_images: OceanEcsOptimizeImages
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

optimize_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#optimize_images OceanEcs#optimize_images}

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.scheduledTask"></a>

```python
scheduled_task: typing.Union[IResolvable, typing.List[OceanEcsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#scheduled_task OceanEcs#scheduled_task}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[OceanEcsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#tags OceanEcs#tags}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.updatePolicy"></a>

```python
update_policy: OceanEcsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#update_policy OceanEcs#update_policy}

---

##### `use_as_template_only`<sup>Optional</sup> <a name="use_as_template_only" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.useAsTemplateOnly"></a>

```python
use_as_template_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}.

---

##### `utilize_commitments`<sup>Optional</sup> <a name="utilize_commitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeCommitments"></a>

```python
utilize_commitments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}.

---

##### `utilize_reserved_instances`<sup>Optional</sup> <a name="utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeReservedInstances"></a>

```python
utilize_reserved_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.whitelist"></a>

```python
whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}.

---

### OceanEcsFilters <a name="OceanEcsFilters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsFilters(
  architectures: typing.List[str] = None,
  categories: typing.List[str] = None,
  disk_types: typing.List[str] = None,
  exclude_families: typing.List[str] = None,
  exclude_metal: typing.Union[bool, IResolvable] = None,
  hypervisor: typing.List[str] = None,
  include_families: typing.List[str] = None,
  is_ena_supported: str = None,
  max_gpu: typing.Union[int, float] = None,
  max_memory_gib: typing.Union[int, float] = None,
  max_network_performance: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None,
  min_enis: typing.Union[int, float] = None,
  min_gpu: typing.Union[int, float] = None,
  min_memory_gib: typing.Union[int, float] = None,
  min_network_performance: typing.Union[int, float] = None,
  min_vcpu: typing.Union[int, float] = None,
  root_device_types: typing.List[str] = None,
  virtualization_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#architectures OceanEcs#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.categories">categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#categories OceanEcs#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.diskTypes">disk_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#disk_types OceanEcs#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeFamilies">exclude_families</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#exclude_families OceanEcs#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeMetal">exclude_metal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#exclude_metal OceanEcs#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.hypervisor">hypervisor</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#hypervisor OceanEcs#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.includeFamilies">include_families</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#include_families OceanEcs#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.isEnaSupported">is_ena_supported</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_ena_supported OceanEcs#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxGpu">max_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_gpu OceanEcs#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxNetworkPerformance">max_network_performance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_network_performance OceanEcs#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minEnis">min_enis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_enis OceanEcs#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minGpu">min_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_gpu OceanEcs#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minMemoryGib">min_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_memory_gib OceanEcs#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minNetworkPerformance">min_network_performance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_network_performance OceanEcs#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minVcpu">min_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_vcpu OceanEcs#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.rootDeviceTypes">root_device_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#root_device_types OceanEcs#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.virtualizationTypes">virtualization_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#virtualization_types OceanEcs#virtualization_types}. |

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#architectures OceanEcs#architectures}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#categories OceanEcs#categories}.

---

##### `disk_types`<sup>Optional</sup> <a name="disk_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.diskTypes"></a>

```python
disk_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#disk_types OceanEcs#disk_types}.

---

##### `exclude_families`<sup>Optional</sup> <a name="exclude_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeFamilies"></a>

```python
exclude_families: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#exclude_families OceanEcs#exclude_families}.

---

##### `exclude_metal`<sup>Optional</sup> <a name="exclude_metal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeMetal"></a>

```python
exclude_metal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#exclude_metal OceanEcs#exclude_metal}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.hypervisor"></a>

```python
hypervisor: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#hypervisor OceanEcs#hypervisor}.

---

##### `include_families`<sup>Optional</sup> <a name="include_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.includeFamilies"></a>

```python
include_families: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#include_families OceanEcs#include_families}.

---

##### `is_ena_supported`<sup>Optional</sup> <a name="is_ena_supported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.isEnaSupported"></a>

```python
is_ena_supported: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_ena_supported OceanEcs#is_ena_supported}.

---

##### `max_gpu`<sup>Optional</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxGpu"></a>

```python
max_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_gpu OceanEcs#max_gpu}.

---

##### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

##### `max_network_performance`<sup>Optional</sup> <a name="max_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxNetworkPerformance"></a>

```python
max_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_network_performance OceanEcs#max_network_performance}.

---

##### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

##### `min_enis`<sup>Optional</sup> <a name="min_enis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minEnis"></a>

```python
min_enis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_enis OceanEcs#min_enis}.

---

##### `min_gpu`<sup>Optional</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minGpu"></a>

```python
min_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_gpu OceanEcs#min_gpu}.

---

##### `min_memory_gib`<sup>Optional</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minMemoryGib"></a>

```python
min_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_memory_gib OceanEcs#min_memory_gib}.

---

##### `min_network_performance`<sup>Optional</sup> <a name="min_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minNetworkPerformance"></a>

```python
min_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_network_performance OceanEcs#min_network_performance}.

---

##### `min_vcpu`<sup>Optional</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minVcpu"></a>

```python
min_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#min_vcpu OceanEcs#min_vcpu}.

---

##### `root_device_types`<sup>Optional</sup> <a name="root_device_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.rootDeviceTypes"></a>

```python
root_device_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#root_device_types OceanEcs#root_device_types}.

---

##### `virtualization_types`<sup>Optional</sup> <a name="virtualization_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.virtualizationTypes"></a>

```python
virtualization_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#virtualization_types OceanEcs#virtualization_types}.

---

### OceanEcsInstanceMetadataOptions <a name="OceanEcsInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsInstanceMetadataOptions(
  http_tokens: str,
  http_put_response_hop_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#http_tokens OceanEcs#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#http_put_response_hop_limit OceanEcs#http_put_response_hop_limit}. |

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#http_tokens OceanEcs#http_tokens}.

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#http_put_response_hop_limit OceanEcs#http_put_response_hop_limit}.

---

### OceanEcsLogging <a name="OceanEcsLogging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsLogging(
  export: OceanEcsLoggingExport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | export block. |

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.property.export"></a>

```python
export: OceanEcsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#export OceanEcs#export}

---

### OceanEcsLoggingExport <a name="OceanEcsLoggingExport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsLoggingExport(
  s3: typing.Union[IResolvable, typing.List[OceanEcsLoggingExportS3]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.property.s3">s3</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]</code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.property.s3"></a>

```python
s3: typing.Union[IResolvable, typing.List[OceanEcsLoggingExportS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#s3 OceanEcs#s3}

---

### OceanEcsLoggingExportS3 <a name="OceanEcsLoggingExportS3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsLoggingExportS3(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#id OceanEcs#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanEcsOptimizeImages <a name="OceanEcsOptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsOptimizeImages(
  perform_at: str,
  should_optimize_ecs_ami: typing.Union[bool, IResolvable],
  time_windows: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.performAt">perform_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#perform_at OceanEcs#perform_at}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.shouldOptimizeEcsAmi">should_optimize_ecs_ami</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_optimize_ecs_ami OceanEcs#should_optimize_ecs_ami}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}. |

---

##### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.performAt"></a>

```python
perform_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#perform_at OceanEcs#perform_at}.

---

##### `should_optimize_ecs_ami`<sup>Required</sup> <a name="should_optimize_ecs_ami" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.shouldOptimizeEcsAmi"></a>

```python
should_optimize_ecs_ami: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_optimize_ecs_ami OceanEcs#should_optimize_ecs_ami}.

---

##### `time_windows`<sup>Optional</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

### OceanEcsScheduledTask <a name="OceanEcsScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTask(
  shutdown_hours: OceanEcsScheduledTaskShutdownHours = None,
  tasks: typing.Union[IResolvable, typing.List[OceanEcsScheduledTaskTasks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.shutdownHours">shutdown_hours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.tasks">tasks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]]</code> | tasks block. |

---

##### `shutdown_hours`<sup>Optional</sup> <a name="shutdown_hours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.shutdownHours"></a>

```python
shutdown_hours: OceanEcsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#shutdown_hours OceanEcs#shutdown_hours}

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.tasks"></a>

```python
tasks: typing.Union[IResolvable, typing.List[OceanEcsScheduledTaskTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#tasks OceanEcs#tasks}

---

### OceanEcsScheduledTaskShutdownHours <a name="OceanEcsScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTaskShutdownHours(
  time_windows: typing.List[str],
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |

---

##### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

### OceanEcsScheduledTaskTasks <a name="OceanEcsScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTaskTasks(
  cron_expression: str,
  is_enabled: typing.Union[bool, IResolvable],
  task_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cron_expression OceanEcs#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#task_type OceanEcs#task_type}. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cron_expression OceanEcs#cron_expression}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#task_type OceanEcs#task_type}.

---

### OceanEcsTags <a name="OceanEcsTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#key OceanEcs#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#value OceanEcs#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#key OceanEcs#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#value OceanEcs#value}.

---

### OceanEcsUpdatePolicy <a name="OceanEcsUpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsUpdatePolicy(
  should_roll: typing.Union[bool, IResolvable],
  auto_apply_tags: typing.Union[bool, IResolvable] = None,
  conditioned_roll: typing.Union[bool, IResolvable] = None,
  roll_config: OceanEcsUpdatePolicyRollConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_roll OceanEcs#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.autoApplyTags">auto_apply_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#auto_apply_tags OceanEcs#auto_apply_tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.conditionedRoll">conditioned_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#conditioned_roll OceanEcs#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#should_roll OceanEcs#should_roll}.

---

##### `auto_apply_tags`<sup>Optional</sup> <a name="auto_apply_tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.autoApplyTags"></a>

```python
auto_apply_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#auto_apply_tags OceanEcs#auto_apply_tags}.

---

##### `conditioned_roll`<sup>Optional</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.conditionedRoll"></a>

```python
conditioned_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#conditioned_roll OceanEcs#conditioned_roll}.

---

##### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.rollConfig"></a>

```python
roll_config: OceanEcsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#roll_config OceanEcs#roll_config}

---

### OceanEcsUpdatePolicyRollConfig <a name="OceanEcsUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsUpdatePolicyRollConfig(
  batch_size_percentage: typing.Union[int, float],
  batch_min_healthy_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#batch_size_percentage OceanEcs#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batch_min_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#batch_min_healthy_percentage OceanEcs#batch_min_healthy_percentage}. |

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#batch_size_percentage OceanEcs#batch_size_percentage}.

---

##### `batch_min_healthy_percentage`<sup>Optional</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```python
batch_min_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#batch_min_healthy_percentage OceanEcs#batch_min_healthy_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanEcsAutoscalerDownOutputReference <a name="OceanEcsAutoscalerDownOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscalerDownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resetMaxScaleDownPercentage">reset_max_scale_down_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_scale_down_percentage` <a name="reset_max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resetMaxScaleDownPercentage"></a>

```python
def reset_max_scale_down_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentageInput">max_scale_down_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentage">max_scale_down_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_scale_down_percentage_input`<sup>Optional</sup> <a name="max_scale_down_percentage_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentageInput"></a>

```python
max_scale_down_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_scale_down_percentage`<sup>Required</sup> <a name="max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentage"></a>

```python
max_scale_down_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsAutoscalerDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---


### OceanEcsAutoscalerHeadroomOutputReference <a name="OceanEcsAutoscalerHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscalerHeadroomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetCpuPerUnit">reset_cpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetMemoryPerUnit">reset_memory_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetNumOfUnits">reset_num_of_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_per_unit` <a name="reset_cpu_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetCpuPerUnit"></a>

```python
def reset_cpu_per_unit() -> None
```

##### `reset_memory_per_unit` <a name="reset_memory_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetMemoryPerUnit"></a>

```python
def reset_memory_per_unit() -> None
```

##### `reset_num_of_units` <a name="reset_num_of_units" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetNumOfUnits"></a>

```python
def reset_num_of_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnitInput">cpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnitInput">memory_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnitsInput">num_of_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_per_unit_input`<sup>Optional</sup> <a name="cpu_per_unit_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnitInput"></a>

```python
cpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit_input`<sup>Optional</sup> <a name="memory_per_unit_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnitInput"></a>

```python
memory_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units_input`<sup>Optional</sup> <a name="num_of_units_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnitsInput"></a>

```python
num_of_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_per_unit`<sup>Required</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit`<sup>Required</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsAutoscalerHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---


### OceanEcsAutoscalerOutputReference <a name="OceanEcsAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscalerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown">put_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom">put_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits">put_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetAutoHeadroomPercentage">reset_auto_headroom_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetDown">reset_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">reset_enable_automatic_and_manual_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetHeadroom">reset_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsAutoConfig">reset_is_auto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetResourceLimits">reset_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetShouldScaleDownNonServiceTasks">reset_should_scale_down_non_service_tasks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_down` <a name="put_down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown"></a>

```python
def put_down(
  max_scale_down_percentage: typing.Union[int, float] = None
) -> None
```

###### `max_scale_down_percentage`<sup>Optional</sup> <a name="max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown.parameter.maxScaleDownPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_scale_down_percentage OceanEcs#max_scale_down_percentage}.

---

##### `put_headroom` <a name="put_headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom"></a>

```python
def put_headroom(
  cpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
) -> None
```

###### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom.parameter.cpuPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#cpu_per_unit OceanEcs#cpu_per_unit}.

---

###### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom.parameter.memoryPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#memory_per_unit OceanEcs#memory_per_unit}.

---

###### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom.parameter.numOfUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#num_of_units OceanEcs#num_of_units}.

---

##### `put_resource_limits` <a name="put_resource_limits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits"></a>

```python
def put_resource_limits(
  max_memory_gib: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None
) -> None
```

###### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits.parameter.maxMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

###### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits.parameter.maxVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

##### `reset_auto_headroom_percentage` <a name="reset_auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```python
def reset_auto_headroom_percentage() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_down` <a name="reset_down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetDown"></a>

```python
def reset_down() -> None
```

##### `reset_enable_automatic_and_manual_headroom` <a name="reset_enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```python
def reset_enable_automatic_and_manual_headroom() -> None
```

##### `reset_headroom` <a name="reset_headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetHeadroom"></a>

```python
def reset_headroom() -> None
```

##### `reset_is_auto_config` <a name="reset_is_auto_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsAutoConfig"></a>

```python
def reset_is_auto_config() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_resource_limits` <a name="reset_resource_limits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetResourceLimits"></a>

```python
def reset_resource_limits() -> None
```

##### `reset_should_scale_down_non_service_tasks` <a name="reset_should_scale_down_non_service_tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetShouldScaleDownNonServiceTasks"></a>

```python
def reset_should_scale_down_non_service_tasks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference">OceanEcsAutoscalerDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference">OceanEcsAutoscalerHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimits">resource_limits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference">OceanEcsAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentageInput">auto_headroom_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.downInput">down_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">enable_automatic_and_manual_headroom_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroomInput">headroom_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfigInput">is_auto_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimitsInput">resource_limits_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasksInput">should_scale_down_non_service_tasks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentage">auto_headroom_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">enable_automatic_and_manual_headroom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfig">is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasks">should_scale_down_non_service_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `down`<sup>Required</sup> <a name="down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.down"></a>

```python
down: OceanEcsAutoscalerDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference">OceanEcsAutoscalerDownOutputReference</a>

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroom"></a>

```python
headroom: OceanEcsAutoscalerHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference">OceanEcsAutoscalerHeadroomOutputReference</a>

---

##### `resource_limits`<sup>Required</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimits"></a>

```python
resource_limits: OceanEcsAutoscalerResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference">OceanEcsAutoscalerResourceLimitsOutputReference</a>

---

##### `auto_headroom_percentage_input`<sup>Optional</sup> <a name="auto_headroom_percentage_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```python
auto_headroom_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `down_input`<sup>Optional</sup> <a name="down_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.downInput"></a>

```python
down_input: OceanEcsAutoscalerDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---

##### `enable_automatic_and_manual_headroom_input`<sup>Optional</sup> <a name="enable_automatic_and_manual_headroom_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```python
enable_automatic_and_manual_headroom_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `headroom_input`<sup>Optional</sup> <a name="headroom_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroomInput"></a>

```python
headroom_input: OceanEcsAutoscalerHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---

##### `is_auto_config_input`<sup>Optional</sup> <a name="is_auto_config_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfigInput"></a>

```python
is_auto_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_limits_input`<sup>Optional</sup> <a name="resource_limits_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimitsInput"></a>

```python
resource_limits_input: OceanEcsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---

##### `should_scale_down_non_service_tasks_input`<sup>Optional</sup> <a name="should_scale_down_non_service_tasks_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasksInput"></a>

```python
should_scale_down_non_service_tasks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_headroom_percentage`<sup>Required</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```python
auto_headroom_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_automatic_and_manual_headroom`<sup>Required</sup> <a name="enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```python
enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_config`<sup>Required</sup> <a name="is_auto_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfig"></a>

```python
is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_scale_down_non_service_tasks`<sup>Required</sup> <a name="should_scale_down_non_service_tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasks"></a>

```python
should_scale_down_non_service_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---


### OceanEcsAutoscalerResourceLimitsOutputReference <a name="OceanEcsAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">reset_max_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxVcpu">reset_max_vcpu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_memory_gib` <a name="reset_max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```python
def reset_max_memory_gib() -> None
```

##### `reset_max_vcpu` <a name="reset_max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```python
def reset_max_vcpu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">max_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">max_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_gib_input`<sup>Optional</sup> <a name="max_memory_gib_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```python
max_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu_input`<sup>Optional</sup> <a name="max_vcpu_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```python
max_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib`<sup>Required</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu`<sup>Required</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---


### OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">base_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">size_per_resource_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">base_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">size_per_resource_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_size_input`<sup>Optional</sup> <a name="base_size_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```python
base_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `size_per_resource_unit_input`<sup>Optional</sup> <a name="size_per_resource_unit_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```python
size_per_resource_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_size`<sup>Required</sup> <a name="base_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```python
base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `size_per_resource_unit`<sup>Required</sup> <a name="size_per_resource_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```python
size_per_resource_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanEcsBlockDeviceMappingsEbsOutputReference <a name="OceanEcsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">put_dynamic_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">reset_dynamic_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dynamic_volume_size` <a name="put_dynamic_volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```python
def put_dynamic_volume_size(
  base_size: typing.Union[int, float],
  resource: str,
  size_per_resource_unit: typing.Union[int, float]
) -> None
```

###### `base_size`<sup>Required</sup> <a name="base_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.baseSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#base_size OceanEcs#base_size}.

---

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#resource OceanEcs#resource}.

---

###### `size_per_resource_unit`<sup>Required</sup> <a name="size_per_resource_unit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.sizePerResourceUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#size_per_resource_unit OceanEcs#size_per_resource_unit}.

---

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_dynamic_volume_size` <a name="reset_dynamic_volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```python
def reset_dynamic_volume_size() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">dynamic_volume_size</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">dynamic_volume_size_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_volume_size`<sup>Required</sup> <a name="dynamic_volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```python
dynamic_volume_size: OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_volume_size_input`<sup>Optional</sup> <a name="dynamic_volume_size_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```python
dynamic_volume_size_input: OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---


### OceanEcsBlockDeviceMappingsList <a name="OceanEcsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanEcsBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanEcsBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]]

---


### OceanEcsBlockDeviceMappingsOutputReference <a name="OceanEcsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs"></a>

```python
def put_ebs(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  dynamic_volume_size: OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#delete_on_termination OceanEcs#delete_on_termination}.

---

###### `dynamic_volume_size`<sup>Optional</sup> <a name="dynamic_volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.dynamicVolumeSize"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#dynamic_volume_size OceanEcs#dynamic_volume_size}

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#encrypted OceanEcs#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#iops OceanEcs#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#kms_key_id OceanEcs#kms_key_id}.

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#snapshot_id OceanEcs#snapshot_id}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#throughput OceanEcs#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#volume_size OceanEcs#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#volume_type OceanEcs#volume_type}.

---

##### `reset_ebs` <a name="reset_ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference">OceanEcsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebsInput">ebs_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: OceanEcsBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference">OceanEcsBlockDeviceMappingsEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```python
ebs_input: OceanEcsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```python
no_device_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanEcsBlockDeviceMappings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings">OceanEcsBlockDeviceMappings</a>]

---


### OceanEcsClusterOrientationList <a name="OceanEcsClusterOrientationList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsClusterOrientationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanEcsClusterOrientationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanEcsClusterOrientation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]]

---


### OceanEcsClusterOrientationOutputReference <a name="OceanEcsClusterOrientationOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsClusterOrientationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resetAvailabilityVsCost">reset_availability_vs_cost</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_vs_cost` <a name="reset_availability_vs_cost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resetAvailabilityVsCost"></a>

```python
def reset_availability_vs_cost() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCostInput">availability_vs_cost_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCost">availability_vs_cost</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_vs_cost_input`<sup>Optional</sup> <a name="availability_vs_cost_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCostInput"></a>

```python
availability_vs_cost_input: str
```

- *Type:* str

---

##### `availability_vs_cost`<sup>Required</sup> <a name="availability_vs_cost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCost"></a>

```python
availability_vs_cost: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanEcsClusterOrientation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation">OceanEcsClusterOrientation</a>]

---


### OceanEcsFiltersOutputReference <a name="OceanEcsFiltersOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetCategories">reset_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetDiskTypes">reset_disk_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeFamilies">reset_exclude_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeMetal">reset_exclude_metal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetHypervisor">reset_hypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIncludeFamilies">reset_include_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIsEnaSupported">reset_is_ena_supported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxGpu">reset_max_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxMemoryGib">reset_max_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxNetworkPerformance">reset_max_network_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxVcpu">reset_max_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinEnis">reset_min_enis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinGpu">reset_min_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinMemoryGib">reset_min_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinNetworkPerformance">reset_min_network_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinVcpu">reset_min_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetRootDeviceTypes">reset_root_device_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetVirtualizationTypes">reset_virtualization_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_architectures` <a name="reset_architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_categories` <a name="reset_categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetCategories"></a>

```python
def reset_categories() -> None
```

##### `reset_disk_types` <a name="reset_disk_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetDiskTypes"></a>

```python
def reset_disk_types() -> None
```

##### `reset_exclude_families` <a name="reset_exclude_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeFamilies"></a>

```python
def reset_exclude_families() -> None
```

##### `reset_exclude_metal` <a name="reset_exclude_metal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeMetal"></a>

```python
def reset_exclude_metal() -> None
```

##### `reset_hypervisor` <a name="reset_hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetHypervisor"></a>

```python
def reset_hypervisor() -> None
```

##### `reset_include_families` <a name="reset_include_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIncludeFamilies"></a>

```python
def reset_include_families() -> None
```

##### `reset_is_ena_supported` <a name="reset_is_ena_supported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIsEnaSupported"></a>

```python
def reset_is_ena_supported() -> None
```

##### `reset_max_gpu` <a name="reset_max_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxGpu"></a>

```python
def reset_max_gpu() -> None
```

##### `reset_max_memory_gib` <a name="reset_max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxMemoryGib"></a>

```python
def reset_max_memory_gib() -> None
```

##### `reset_max_network_performance` <a name="reset_max_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxNetworkPerformance"></a>

```python
def reset_max_network_performance() -> None
```

##### `reset_max_vcpu` <a name="reset_max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxVcpu"></a>

```python
def reset_max_vcpu() -> None
```

##### `reset_min_enis` <a name="reset_min_enis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinEnis"></a>

```python
def reset_min_enis() -> None
```

##### `reset_min_gpu` <a name="reset_min_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinGpu"></a>

```python
def reset_min_gpu() -> None
```

##### `reset_min_memory_gib` <a name="reset_min_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinMemoryGib"></a>

```python
def reset_min_memory_gib() -> None
```

##### `reset_min_network_performance` <a name="reset_min_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinNetworkPerformance"></a>

```python
def reset_min_network_performance() -> None
```

##### `reset_min_vcpu` <a name="reset_min_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinVcpu"></a>

```python
def reset_min_vcpu() -> None
```

##### `reset_root_device_types` <a name="reset_root_device_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetRootDeviceTypes"></a>

```python
def reset_root_device_types() -> None
```

##### `reset_virtualization_types` <a name="reset_virtualization_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetVirtualizationTypes"></a>

```python
def reset_virtualization_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categoriesInput">categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypesInput">disk_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamiliesInput">exclude_families_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetalInput">exclude_metal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisorInput">hypervisor_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamiliesInput">include_families_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupportedInput">is_ena_supported_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpuInput">max_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGibInput">max_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformanceInput">max_network_performance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpuInput">max_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnisInput">min_enis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpuInput">min_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGibInput">min_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformanceInput">min_network_performance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpuInput">min_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypesInput">root_device_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypesInput">virtualization_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypes">disk_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamilies">exclude_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetal">exclude_metal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisor">hypervisor</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamilies">include_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupported">is_ena_supported</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpu">max_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformance">max_network_performance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnis">min_enis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpu">min_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGib">min_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformance">min_network_performance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpu">min_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypes">root_device_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypes">virtualization_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `categories_input`<sup>Optional</sup> <a name="categories_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categoriesInput"></a>

```python
categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_types_input`<sup>Optional</sup> <a name="disk_types_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypesInput"></a>

```python
disk_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_families_input`<sup>Optional</sup> <a name="exclude_families_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamiliesInput"></a>

```python
exclude_families_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_metal_input`<sup>Optional</sup> <a name="exclude_metal_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetalInput"></a>

```python
exclude_metal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hypervisor_input`<sup>Optional</sup> <a name="hypervisor_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisorInput"></a>

```python
hypervisor_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_families_input`<sup>Optional</sup> <a name="include_families_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamiliesInput"></a>

```python
include_families_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ena_supported_input`<sup>Optional</sup> <a name="is_ena_supported_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupportedInput"></a>

```python
is_ena_supported_input: str
```

- *Type:* str

---

##### `max_gpu_input`<sup>Optional</sup> <a name="max_gpu_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpuInput"></a>

```python
max_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib_input`<sup>Optional</sup> <a name="max_memory_gib_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGibInput"></a>

```python
max_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_network_performance_input`<sup>Optional</sup> <a name="max_network_performance_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```python
max_network_performance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu_input`<sup>Optional</sup> <a name="max_vcpu_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpuInput"></a>

```python
max_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_enis_input`<sup>Optional</sup> <a name="min_enis_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnisInput"></a>

```python
min_enis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpu_input`<sup>Optional</sup> <a name="min_gpu_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpuInput"></a>

```python
min_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gib_input`<sup>Optional</sup> <a name="min_memory_gib_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGibInput"></a>

```python
min_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_network_performance_input`<sup>Optional</sup> <a name="min_network_performance_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```python
min_network_performance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vcpu_input`<sup>Optional</sup> <a name="min_vcpu_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpuInput"></a>

```python
min_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_device_types_input`<sup>Optional</sup> <a name="root_device_types_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypesInput"></a>

```python
root_device_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtualization_types_input`<sup>Optional</sup> <a name="virtualization_types_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypesInput"></a>

```python
virtualization_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_types`<sup>Required</sup> <a name="disk_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypes"></a>

```python
disk_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_families`<sup>Required</sup> <a name="exclude_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamilies"></a>

```python
exclude_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_metal`<sup>Required</sup> <a name="exclude_metal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetal"></a>

```python
exclude_metal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisor"></a>

```python
hypervisor: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_families`<sup>Required</sup> <a name="include_families" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamilies"></a>

```python
include_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ena_supported`<sup>Required</sup> <a name="is_ena_supported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupported"></a>

```python
is_ena_supported: str
```

- *Type:* str

---

##### `max_gpu`<sup>Required</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpu"></a>

```python
max_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib`<sup>Required</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_network_performance`<sup>Required</sup> <a name="max_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformance"></a>

```python
max_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu`<sup>Required</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_enis`<sup>Required</sup> <a name="min_enis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnis"></a>

```python
min_enis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpu`<sup>Required</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpu"></a>

```python
min_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gib`<sup>Required</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGib"></a>

```python
min_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_network_performance`<sup>Required</sup> <a name="min_network_performance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformance"></a>

```python
min_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vcpu`<sup>Required</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpu"></a>

```python
min_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_device_types`<sup>Required</sup> <a name="root_device_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypes"></a>

```python
root_device_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtualization_types`<sup>Required</sup> <a name="virtualization_types" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypes"></a>

```python
virtualization_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---


### OceanEcsInstanceMetadataOptionsOutputReference <a name="OceanEcsInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---


### OceanEcsLoggingExportOutputReference <a name="OceanEcsLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsLoggingExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3"></a>

```python
def put_s3(
  value: typing.Union[IResolvable, typing.List[OceanEcsLoggingExportS3]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]

---

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List">OceanEcsLoggingExportS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3Input">s3_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3"></a>

```python
s3: OceanEcsLoggingExportS3List
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List">OceanEcsLoggingExportS3List</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3Input"></a>

```python
s3_input: typing.Union[IResolvable, typing.List[OceanEcsLoggingExportS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---


### OceanEcsLoggingExportS3List <a name="OceanEcsLoggingExportS3List" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsLoggingExportS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanEcsLoggingExportS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanEcsLoggingExportS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]

---


### OceanEcsLoggingExportS3OutputReference <a name="OceanEcsLoggingExportS3OutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsLoggingExportS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanEcsLoggingExportS3]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]

---


### OceanEcsLoggingOutputReference <a name="OceanEcsLoggingOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport">put_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resetExport">reset_export</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_export` <a name="put_export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport"></a>

```python
def put_export(
  s3: typing.Union[IResolvable, typing.List[OceanEcsLoggingExportS3]] = None
) -> None
```

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport.parameter.s3"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3">OceanEcsLoggingExportS3</a>]]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#s3 OceanEcs#s3}

---

##### `reset_export` <a name="reset_export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resetExport"></a>

```python
def reset_export() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference">OceanEcsLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.exportInput">export_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.export"></a>

```python
export: OceanEcsLoggingExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference">OceanEcsLoggingExportOutputReference</a>

---

##### `export_input`<sup>Optional</sup> <a name="export_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.exportInput"></a>

```python
export_input: OceanEcsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---


### OceanEcsOptimizeImagesOutputReference <a name="OceanEcsOptimizeImagesOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsOptimizeImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resetTimeWindows">reset_time_windows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_windows` <a name="reset_time_windows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resetTimeWindows"></a>

```python
def reset_time_windows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAtInput">perform_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmiInput">should_optimize_ecs_ami_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindowsInput">time_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAt">perform_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmi">should_optimize_ecs_ami</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `perform_at_input`<sup>Optional</sup> <a name="perform_at_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAtInput"></a>

```python
perform_at_input: str
```

- *Type:* str

---

##### `should_optimize_ecs_ami_input`<sup>Optional</sup> <a name="should_optimize_ecs_ami_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmiInput"></a>

```python
should_optimize_ecs_ami_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows_input`<sup>Optional</sup> <a name="time_windows_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindowsInput"></a>

```python
time_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAt"></a>

```python
perform_at: str
```

- *Type:* str

---

##### `should_optimize_ecs_ami`<sup>Required</sup> <a name="should_optimize_ecs_ami" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmi"></a>

```python
should_optimize_ecs_ami: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsOptimizeImages
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---


### OceanEcsScheduledTaskList <a name="OceanEcsScheduledTaskList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanEcsScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanEcsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]]

---


### OceanEcsScheduledTaskOutputReference <a name="OceanEcsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours">put_shutdown_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks">put_tasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetShutdownHours">reset_shutdown_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetTasks">reset_tasks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shutdown_hours` <a name="put_shutdown_hours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours"></a>

```python
def put_shutdown_hours(
  time_windows: typing.List[str],
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours.parameter.timeWindows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

##### `put_tasks` <a name="put_tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks"></a>

```python
def put_tasks(
  value: typing.Union[IResolvable, typing.List[OceanEcsScheduledTaskTasks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]]

---

##### `reset_shutdown_hours` <a name="reset_shutdown_hours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetShutdownHours"></a>

```python
def reset_shutdown_hours() -> None
```

##### `reset_tasks` <a name="reset_tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetTasks"></a>

```python
def reset_tasks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHours">shutdown_hours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference">OceanEcsScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList">OceanEcsScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHoursInput">shutdown_hours_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasksInput">tasks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shutdown_hours`<sup>Required</sup> <a name="shutdown_hours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHours"></a>

```python
shutdown_hours: OceanEcsScheduledTaskShutdownHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference">OceanEcsScheduledTaskShutdownHoursOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasks"></a>

```python
tasks: OceanEcsScheduledTaskTasksList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList">OceanEcsScheduledTaskTasksList</a>

---

##### `shutdown_hours_input`<sup>Optional</sup> <a name="shutdown_hours_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```python
shutdown_hours_input: OceanEcsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---

##### `tasks_input`<sup>Optional</sup> <a name="tasks_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasksInput"></a>

```python
tasks_input: typing.Union[IResolvable, typing.List[OceanEcsScheduledTaskTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanEcsScheduledTask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask">OceanEcsScheduledTask</a>]

---


### OceanEcsScheduledTaskShutdownHoursOutputReference <a name="OceanEcsScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">time_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows_input`<sup>Optional</sup> <a name="time_windows_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```python
time_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---


### OceanEcsScheduledTaskTasksList <a name="OceanEcsScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTaskTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanEcsScheduledTaskTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanEcsScheduledTaskTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]]

---


### OceanEcsScheduledTaskTasksOutputReference <a name="OceanEcsScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsScheduledTaskTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanEcsScheduledTaskTasks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks">OceanEcsScheduledTaskTasks</a>]

---


### OceanEcsTagsList <a name="OceanEcsTagsList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanEcsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanEcsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]]

---


### OceanEcsTagsOutputReference <a name="OceanEcsTagsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanEcsTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags">OceanEcsTags</a>]

---


### OceanEcsUpdatePolicyOutputReference <a name="OceanEcsUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig">put_roll_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetAutoApplyTags">reset_auto_apply_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetConditionedRoll">reset_conditioned_roll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetRollConfig">reset_roll_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_roll_config` <a name="put_roll_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig"></a>

```python
def put_roll_config(
  batch_size_percentage: typing.Union[int, float],
  batch_min_healthy_percentage: typing.Union[int, float] = None
) -> None
```

###### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig.parameter.batchSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#batch_size_percentage OceanEcs#batch_size_percentage}.

---

###### `batch_min_healthy_percentage`<sup>Optional</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig.parameter.batchMinHealthyPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.177.0/docs/resources/ocean_ecs#batch_min_healthy_percentage OceanEcs#batch_min_healthy_percentage}.

---

##### `reset_auto_apply_tags` <a name="reset_auto_apply_tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetAutoApplyTags"></a>

```python
def reset_auto_apply_tags() -> None
```

##### `reset_conditioned_roll` <a name="reset_conditioned_roll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetConditionedRoll"></a>

```python
def reset_conditioned_roll() -> None
```

##### `reset_roll_config` <a name="reset_roll_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetRollConfig"></a>

```python
def reset_roll_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference">OceanEcsUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTagsInput">auto_apply_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRollInput">conditioned_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfigInput">roll_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRollInput">should_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTags">auto_apply_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRoll">conditioned_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `roll_config`<sup>Required</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfig"></a>

```python
roll_config: OceanEcsUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference">OceanEcsUpdatePolicyRollConfigOutputReference</a>

---

##### `auto_apply_tags_input`<sup>Optional</sup> <a name="auto_apply_tags_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTagsInput"></a>

```python
auto_apply_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conditioned_roll_input`<sup>Optional</sup> <a name="conditioned_roll_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```python
conditioned_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `roll_config_input`<sup>Optional</sup> <a name="roll_config_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfigInput"></a>

```python
roll_config_input: OceanEcsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---

##### `should_roll_input`<sup>Optional</sup> <a name="should_roll_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRollInput"></a>

```python
should_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply_tags`<sup>Required</sup> <a name="auto_apply_tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTags"></a>

```python
auto_apply_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conditioned_roll`<sup>Required</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRoll"></a>

```python
conditioned_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---


### OceanEcsUpdatePolicyRollConfigOutputReference <a name="OceanEcsUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_ecs

oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">reset_batch_min_healthy_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_min_healthy_percentage` <a name="reset_batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```python
def reset_batch_min_healthy_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batch_min_healthy_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batch_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batch_min_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_min_healthy_percentage_input`<sup>Optional</sup> <a name="batch_min_healthy_percentage_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```python
batch_min_healthy_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_percentage_input`<sup>Optional</sup> <a name="batch_size_percentage_input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```python
batch_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_min_healthy_percentage`<sup>Required</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```python
batch_min_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```python
internal_value: OceanEcsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---



